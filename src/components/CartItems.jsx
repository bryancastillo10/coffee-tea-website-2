import { useContext, useState } from "react";
import { ShopContext } from "src/components/context/ShopContext.jsx";
import { Confirm } from "src/components/";


const CartItems = (props) => {
  const {id, beverageName, price, image} = props.data;
  const {cartItems, addToOrder,removeFromOrder, updateOrderCount} = useContext(ShopContext);

  return <div className="ordercards__container">
    <img src={image} alt="ordered-drink" />
    <div className="cartItems__content">
      <p>{beverageName}</p>
      <p><span>$ {price}</span></p>
      </div>
      <div className="cartItems__counter">
        <button onClick={()=> removeFromOrder(id)}> - </button>
        <input value={cartItems[id]} onChange={(e) =>updateOrderCount(Number(e.target.value),id)} />
        <button onClick={()=> addToOrder(id)}> + </button>
      </div>
      </div>
};

export default CartItems;
