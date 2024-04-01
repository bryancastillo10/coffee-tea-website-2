import { useContext, useState } from "react";
import { ShopContext } from "src/components/context/ShopContext.jsx";
import { Confirm } from "src/components/";


const CartItems = (props) => {
  const { id, beverageName, price, image } = props.data;
  const { cartItems, addToOrder, removeFromOrder, updateOrderCount } =
    useContext(ShopContext);
  const { quantity, size } = cartItems[id];
  const [showModal, setShowModal] = useState(false);

    if (quantity=== 0){
      return <Confirm setShowModal={setShowModal} />;
    }
    return (
    <div className="ordercards__container">
      <img src={image} alt="ordered-drinks" />
      <div className="cartItems__content">
        <p>{beverageName}</p>
        <p>Php {price[size]}</p>
        <div className="cartItems__counter">
          <button onClick={() => removeFromOrder(id)}>-</button>
          <input
            value={quantity}
            onChange={(e) => updateOrderCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToOrder(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
