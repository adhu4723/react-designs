import { createContext, useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] =useState([])

    const addToCart = (product) => {
        console.log(product);
        
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                return prevItems;
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    }

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };
    
    return (
        <CartContext.Provider value={{addToCart,cartItems,removeFromCart}} >
            {children}
        </CartContext.Provider>
    );
};

// Custom Hook to Use Cart Context
export const useCart = () => {
    return useContext(CartContext);
};