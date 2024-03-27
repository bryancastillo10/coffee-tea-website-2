//Array
import BestSellerList from "src/arrays/BestSeller.js";

const Card = () => {
  return (
    <div className="card__main">
    {BestSellerList.map((drinks) => {
    return(
        <div key={drinks.id} className="card__container">
          <div className="card__image">
            <img src={drinks.img} alt="bestseller drinks" />
          </div>
          <div className="card__content">
            <h1>{drinks.name_en}</h1>
            <h1>{drinks.name_zh}</h1>
            <p>{drinks.description}</p>
          </div>
        </div>
    );
  
  })}
    </div>)
}

export default Card
