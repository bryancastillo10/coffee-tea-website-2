import React, { useState, createContext } from "react";

// Array
import { OrderMenu } from "src/arrays/Menu.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let orderItems = {};
  for (let i = 1; i < OrderMenu.length + 1; i++) {
    orderItems[i] = { quantity: 0, size: "small" };
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

  const addToOrder = (itemId,size) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        quantity: prev[itemId].quantity + 1,
        size: size,
      },
    }));
  };
  const removeFromOrder = (itemId) => {
    setCartItems((prev) =>  ({
      ...prev,
      [itemId]: {
        quantity: prev[itemId].quantity - 1,
        size: prev[itemId].size,
      },
    }));
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
