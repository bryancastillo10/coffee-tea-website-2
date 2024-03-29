// Images
import CoffeeTime from "src/assets/images/about.png";

// Components
import Button from "src/components/Button.jsx";

const ShopInfo = () => {
  return (
    <section className="shopinfo__background">
      <div className="shopinfo__container">
        <div className="shopinfo__header">
          <h1>Warm embrace in a cup of coffee or tea</h1>
          <p>
            "Coffee and tea are beloved beverage enjoyed by millions worldwide
            for its bold flavor, rich aroma, and comforting warmth"
          </p>
        </div>
        <div className="shopinfo__content">
          <div className="shopinfo__image">
            <img src={CoffeeTime} alt="coffee-together" />
          </div>
          <div className="shopinfo__statements">
            <h1>Get to know <span>Espresso&Tea Co.</span></h1>
            <p id="statement-1">
              Espresso&Tea Co. is a distinguished beverage store, dedicated to
              providing an exceptional coffee and tea experience. With a
              commitment to quality and innovation, we strive to exceed the
              expectations of our patrons. Our expertly crafted beverages, cozy
              ambiance, and attentive service create a welcoming atmosphere for
              coffee and tea enthusiasts alike. Come indulge in the artistry of
              flavor and tradition here at Espresso&TeaCo.
            </p>
            <p id="statement-2">
              Our store is not just a place to enjoy coffee and tea it's a
              destination where passion meets perfection. From our carefully
              selected beans to our meticulously brewed teas, every aspect of
              our menu reflects our dedication to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
