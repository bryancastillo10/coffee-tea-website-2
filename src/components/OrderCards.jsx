import { useContext, useState } from "react";
import { ShopContext } from "src/components/context/ShopContext.jsx";

const OrderCards = (props) => {
  const { id, beverageName, price, image, isCoffee } = props.data;
  // const { addToOrder, cartItems } = useContext(ShopContext);
  const [size,setSize] = useState("small");
  // const cartItemAmount = cartItems[id]?.quantity||0;

  const handleSizeChange = (newSize) =>{
    setSize(newSize);
  }
  return (
    <div className="ordercards__container">
      <img src={image} alt="order-list-menu" />
      <div className="ordercards__content">
        <p>{beverageName}</p>
        <div>
          <label>
            <input
              type="radio"
              value="small"
              checked={size === "small"}
              onChange={() => handleSizeChange("small")}
            />
            Small
          </label>
          <label>
            <input
              type="radio"
              value="large"
              checked={size === "large"}
              onChange={() => handleSizeChange("large")}
            />
            Large
          </label>
        </div>
        <p>Php {price.}</p>
      </div>
      <button className="ordercards__button" onClick={() => addToOrder(id, size)}>
        Order {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>

  );
};

export default OrderCards;
