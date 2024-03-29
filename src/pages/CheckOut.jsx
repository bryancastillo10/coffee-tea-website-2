import { useContext } from "react";
import { Link } from "react-router-dom";

//Array
import { OrderMenu } from "src/arrays/Menu.js";

//Context Logic
import { ShopContext } from "src/components/context/ShopContext.jsx";

// Component
import CartItems from "src/components/CartItems.jsx";
import Button from "src/components/Button.jsx";

const CheckOut = () => {
  const { cartItems, getTotalPriceAmount } = useContext(ShopContext);
  const totalPrice = getTotalPriceAmount();

  return (
    <section className="order__page">
      <div className="order__page-container">
        <h1>Proceed to Checkout</h1>
        <p>Your orders</p>
      </div>
      <div className="order__menu">
        {OrderMenu.map((drinks) => {
          if (cartItems[drinks.id] !== 0) {
            return <CartItems data={drinks} />;
          }
        })}
      </div>
      <div className="checkout__button">
        <p>Subtotal: Php {totalPrice}</p>
        <Link to={"/order"}>
          {" "}
          <Button text="Continue Shopping" />
        </Link>
        <Button text="Proceed to Payment" />
      </div>
    </section>
  );
};

export default CheckOut;
