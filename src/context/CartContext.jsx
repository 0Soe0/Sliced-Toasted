import { useState } from 'react';
import { CartContext } from './cartContext.js';

//Component has the job to make cart data available to other components
//We use destructuring to access props.children directly, children refers to whatever you place between the opening and closing tags of a component
//We want all the components inside our CartProvider to have access to the same cart
export const CartProvider = ({ children }) => {
  //Our list of cart items, initially empty
  const [cartItems, setCartItems] = useState([]);

  //The function that allows us to add products to said list
  const addToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}> {/*specifies which information we want to share among the children inside our provider*/}
      {children}
    </CartContext.Provider>
  );
};
