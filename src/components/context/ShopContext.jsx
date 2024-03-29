import React, { useState, createContext } from "react";

// Array
import { OrderMenu } from "src/arrays/Menu.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let orderItems = {};
  for (let i = 1; i < OrderMenu.length + 1; i++) {
    orderItems[i] = 0;
  }
  return orderItems;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalPriceAmount = () => {
    let totalPrice = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemPrice = OrderMenu.find((drinks) => drinks.id === Number(item));
        totalPrice += cartItems[item] * itemPrice.price;
      }
    }
    return totalPrice;
  };

  const addToOrder = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromOrder = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateOrderCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const contextValue = {
    cartItems,
    addToOrder,
    removeFromOrder,
    updateOrderCount,
    getTotalPriceAmount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
