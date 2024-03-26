import HeroImg from "src/assets/images/rounded_coffee.png";

const Hero = () => {
  return (
      <section className="hero__container flex-center padding-space">
        <div className="hero__subcontainer">
        {/* Hero Content */}
        <div className="hero__content">
          <div className="hero__header">
            <h1>Brewing up premium 
            <span className="hero__header-highlight"> coffee and tea </span> 
             to freshen up your day</h1>
          </div>
          <div className="hero__button">
            <button className="brown-gradient">Premium Delights</button>
          </div>
        </div>

        {/* Hero Branding */}
        <div className="hero__branding flex-center">
          <div className="hero__image">
            <img className="spin" src={HeroImg} alt="coffee-cup-top-view" />
          </div>
          <div className="hero__subheader-top brown-gradient">
            <h3>Must Try</h3></div>
          <div className="hero__subheader-bottom brown-gradient">
            <h3>Premium Grade</h3></div>
        </div>
        </div>
      </section>
  )
}

export default Hero
