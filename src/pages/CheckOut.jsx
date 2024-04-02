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
       <div className="cartItems__content">

       <h1>Your Order: </h1>
       {Menu.map((drink)=>{
        if(cartItems[drink.id] !== 0){
          return <CartItems key={drink.id} data={drink} />
        }
       })}
       </div>
       {totalPrice > 0 ?
       <div className="order__subtotal">
        <p>SubTotal: ${totalPrice}</p>
        <Link to="/order"><Button text="Continue Shopping" image={CartCheers}/></Link>
        <Button text="Proceed to Payment" image={CashOut}/>
        </div> 
       : <h1> Your cart is Empty</h1>} </div>
    </section>
  );
};

export default CheckOut;
