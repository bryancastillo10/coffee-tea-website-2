import { useContext } from "react";
import { Link } from "react-router-dom";

//Array
import { Menu } from "src/arrays/Menu.js";

//Context States
import { ShopContext } from "src/components/context/ShopContext.jsx";

// Component
import CartItems from "src/components/CartItems.jsx";
import Button from "src/components/ui/Button.jsx";

// Icons
import CartCheers from "src/assets/icons/cart.svg";
import CashOut from "src/assets/icons/cashout.svg";

const CheckOut = () => {
  const { cartItems, getTotalPrice} = useContext(ShopContext);
  const totalPrice = getTotalPrice();

  return (
    <section className="order__page">
      <div className="order__page-container">
       <div className="order__page-header">
            <h1>Your Order: </h1>
       </div>
       
       <div className="order__menu">
       {Menu.map((drink)=>{
        if(cartItems[drink.id] !== 0){
          return <CartItems key={drink.id} data={drink} />
        }
       })}
       </div>
       {/* Total Price Section */}
       <div className="checkout__subtotal">
       {totalPrice > 0 ?
       <div>
        <h1>SubTotal: <span>${totalPrice}</span> </h1>
        <Link to="/order"><Button text="Continue Shopping" image={CartCheers}/></Link>
        <Link to="/payment"><Button text="Proceed to Payment" image={CashOut}/></Link>
        </div> 
       : <h1> Your cart is Empty</h1>} </div>
       </div>

    </section>
  );
};

export default CheckOut;
