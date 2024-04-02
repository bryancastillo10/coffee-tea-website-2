// React-Router-DOM
import { Link } from "react-router-dom";

// Array
import { Menu } from "src/arrays/Menu.js";

// Component
import { OrderCards, Button } from "src/components/";

// Icon
import CartCheers from "src/assets/icons/cart.svg";

const Order = () => {
  return (
    <section className="order__page" id="order-page">
      <div className="order__page-container">
        <div className="order__page-header">
          <h1>Brewing Up Here at Espresso&Tea Co.</h1>
          <Link to="/check-out">
            <Button text="Check Order" image={CartCheers}></Button>
          </Link>
        </div>
        <div className="order__menu">
          {Menu.map((drinks) => (
            <OrderCards key={drinks.id} data={drinks} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Order;
