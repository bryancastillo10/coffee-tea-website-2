import {useContext} from "react";
import {ShopContext} from "src/context/ShopContext.jsx";

const OrderCards = (props) => {
  const {id,beverageName,price,image} = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);
  
  const cartItemAmount = cartItems[id];

  return (
    <div className = "ordercards__container">
    <img src={image} alt="" />
    <div className="ordercards__content">
      <p>{beverageName}</p>
      <p>Php {price}</p>
    </div>
    <button className="ordercards__button" onClick={()=>addToCart(id)}
    >Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</> }
    </button>
    </div>
  )
}

export default OrderCards;