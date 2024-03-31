import CoffeeLogo from "src/assets/images/company_logo.png";

const Feedback = () => {
  return (
    <section className="feedback__page">
      <div className="feedback__container">
        <div className="feedback__wrapper flex-center">

        <div className="feedback__logo">
          <div className="feedback__logo-title">
            <h1>Getting to know the latest brew?</h1>
          </div>
          <div className="feedback__logo-image">
            <img src={CoffeeLogo} alt="" />
          </div>
      </div>
      <div className="feedback__form">
          <div className="feedback__form-ads">
            <h1>Subscribe to our Newsletter</h1>
            <p>Get the latest updates of our handcrafted coffee and tea!</p>
          </div>
          <div className="feedback__form-form">
          <form action="_blank">
              <input type="email" placeholder="Subscribe by entering your e-mail"
              name="client-email" id="client-email"/>
              <button>Subscribe</button>
              </form>
          </div>

        </div>
      
        </div>
      </div>
    </section>
  );
};

export default Feedback;
