import React,{createContext, useState} from 'react';
import {Menu} from "src/arrays/Menu.js";  

export const ShopContext = createContext(null);

// Default Object with 0 values
const getDefaultCart = () => {
  let orderedDrink = {}
  for (let i=1; i < Menu.length + 1; i++){
    orderedDrink[i]=0;
  }
  return orderedDrink;
};

const ShopContextProvider= (props) => {
  const [cartItems,setCartItems] = useState(getDefaultCart());
  
  // Total Price Calculation for Checkout
const getTotalPrice = () => {
  let totalPrice = 0;
  for (const item in cartItems){
    if (cartItems[item] > 0){
      let priceInfo = Menu.find((drinks) => drinks.id === Number(item));
      totalPrice += cartItems[item] * priceInfo.price;
    }
  }
  return totalPrice;
}

  // Adding Quantity
  const addToOrder = (itemId) =>{
    setCartItems((prev)=> ({...prev,[itemId]: prev[itemId] + 1}));
  };

  // Subtracting Quantity
  const removeFromOrder = (itemId) =>{
    setCartItems((prev)=> ({...prev,[itemId]: prev[itemId] - 1}));
  };

  // For the input tag Update Value 
  const updateOrderCount = (newAmount, itemId)=>{
    setCartItems((prev)=>({...prev, [itemId]: newAmount}));
  }

  // Summary
  const contextValue= {cartItems, 
    addToOrder, removeFromOrder,getTotalPrice,
    updateOrderCount}

return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
};
export default ShopContextProvider;
