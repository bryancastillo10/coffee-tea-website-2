import React, {useState, createContext} from 'react'

// Array
import {OrderMenu} from "src/arrays/Menu.js";

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for( let i = 1; i < OrderMenu.length + 1; i++ ){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToOrder = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }

    const removeFromOrder = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const contextValue = {cartItems, addToOrder, removeFromOrder}
    return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider;
