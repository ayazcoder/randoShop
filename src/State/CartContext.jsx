import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { localStorageData } from './localStorageData';
import { ShowSuccessToast } from '../components/Common/Toast/toast';

const CartContext = createContext();

export const getCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState(localStorageData('cart') || {});
    const [totalItems, setTotalItems] = useState(Object.keys(cartItems).length);

    useEffect(() => {
        const handleStorageChange = () => {
            setCartItems(localStorageData('cart') || {});
            setTotalItems(Object.keys(updatedCartItems).length);
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    const addToCart = (id, item) => {
        try {
            const updatedCartItems = { ...cartItems };
            updatedCartItems[id] = item;
            localStorage.setItem('cart', JSON.stringify(updatedCartItems));
            navigate('/cart')
            window.location.reload();
            ShowSuccessToast('Item added successfully!');
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};
