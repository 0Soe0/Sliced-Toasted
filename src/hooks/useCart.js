
import { useContext } from 'react';
import { CartContext } from '../context/cartContext.js';

//Custom hook makes it convenient to access the data, we can access cartItems and addToCart importing useCart() from any children inside our CartContext provider
export const useCart = () => useContext(CartContext);
