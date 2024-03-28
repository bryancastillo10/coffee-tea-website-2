// Array
import {OrderMenu} from "src/arrays/Menu.js";

// Component
import OrderCards from "src/components/OrderCards.jsx";

const Order = () => {
  return ( 
    <section className="order__page" id="order-page">
    <div>
      <h1>Brewing Up Here at Espresso&Tea Co.</h1>
      <div className="order__menu">
        {OrderMenu.map((drinks)=>(
          <OrderCards data={drinks}/>
        ))}
     </div>
    </div>
    </section>
  )
}

export default Order
