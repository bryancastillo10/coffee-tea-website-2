import { useContext, useState } from "react";
import { ShopContext } from "src/components/context/ShopContext.jsx";

const OrderCards = (props) => {
  const {id,beverageName,price,image} = props.data;
  
  const {addToOrder, cartItems} = useContext(ShopContext);
  
  const orderQuantity = cartItems[id];
  
  return (
    <div className="ordercards__container">
      <img src={image} alt="order-menu-images" />
      <div className="ordercards__content">
        <p>{beverageName}</p>
        <p>Php {price}</p>
        <button className="ordercards__button" onClick={()=>{addToOrder(id)}}>
          Order{ orderQuantity>0 && <>({orderQuantity})</>}
          </button>
      </div>
    </div>
  );

  }


export default OrderCards;
