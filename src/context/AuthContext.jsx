import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate(); // Move inside the component

  const [user, setUser] = useState(() => {
    // Load user from localStorage on initial load
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email, password) => {
    const newUser = { email };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser)); // Store properly
    navigate('/'); // Navigate after login
  };

  const signup = (email, password,name) => {
    const newUser = {name, email };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser)); // Store properly
    navigate('/'); // Navigate after signup
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove on logout
    // navigate('/login'); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};