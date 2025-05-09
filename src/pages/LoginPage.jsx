import React, { useState } from "react";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { login,user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin=(e)=>{
e.preventDefault()
login(email,password)
  }
  return (
    <div className="flex flex-col lg:flex-row max-w-4xl mx-auto lg:shadow-2xl ">
      {/* Left Side - Welcome Back */}
      <div
        className="hidden lg:flex relative w-1/2 bg-cover bg-center items-center justify-center p-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        {/* Black overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>

        {/* Content above the overlay */}
        <div className="text-center z-10 text-white space-y-6">
          <h1 className="text-2xl font-bold">New Here?</h1>
          <Link
          to={'/register'}
            type="button"
            className="px-8 py-2 border border-white text-white rounded-full hover:bg-amber-600 transition"
          >
            Register
          </Link>

          
        </div>
      </div>

      {/* Right Side - Login */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 sm:p-10 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <form onSubmit={handleLogin} className="space-y-2">
            <InputField onChange={(e) => setEmail(e.target.value)}  label="Email" name="email" />
            <InputField onChange={(e) => setPassword(e.target.value)} label="Password" type="password" name="password" />

            <div className="flex justify-end">
              <a href="#" className="text-sm text-amber-800 hover:underline">
                Forgot Password?
              </a>
            </div>


            <button
              type="submit"
              className="w-full bg-amber-800 text-white py-3 rounded-full hover:bg-amber-600 transition"
            >
              Login
            </button>

            <p>Don't have an account? <Link className="text-amber-700 font-semibold " to={'/register'}>Register</Link> </p>

            {/* Or login with social */}
            <div className="flex items-center gap-2 my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="text-gray-400 text-sm">or login with</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* <div className="flex items-center justify-center gap-4">
              <button className="bg-blue-500 px-3 py-2 rounded-full text-white">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="bg-red-500 px-3 py-2 rounded-full text-white">
                <i className="fab fa-google"></i>
              </button>
              <button className="bg-blue-400 px-3 py-2 rounded-full text-white">
                <i className="fab fa-twitter"></i>
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
