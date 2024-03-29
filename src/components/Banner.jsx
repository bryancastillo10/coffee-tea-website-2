// Images and Icons
import TeaTop from "src/assets/images/tea-top.png";
import BannerBg from "src/assets/bg/texture.png";
import Leaf from "src/assets/icons/leaf.svg";
import HotCoffee from "src/assets/icons/hot-coffee.svg";
import SnowFlake from "src/assets/icons/snowflake.svg";

const Banner = () => {
  return (
    <section class="banner__background">
      <div className="banner__container">
        <div className="banner__left-image">
          <img className="spin" src={TeaTop} alt="tea-top" />
        </div>
        <div className="banner__right-content">
          <div className="banner__content-header">
            <h1>Premium Delights</h1>
            <p>
              Espresso&Tea Co. invites you to savor the perfect harmony of rich
              espresso and delicate teas. Every sip transports you to a world of
              exquisite flavor and tranquility.
            </p>
          </div>
          
            <div className="banner__content-column1">
              <div className="banner__content-icon">
                <img id="banner__icon-leaf" src={Leaf} alt="icon-1" />
                <span>Refreshing Aroma</span>
              </div>
              <div className="banner__content-icon">
                <img id="banner__icon-hot" src={HotCoffee} alt="icon-2" />
                <span>Blazing Brews</span>
              </div>
              <div className="banner__content-icon">
                <img id="banner__icon-cold" src={SnowFlake} alt="icon-3" />
                <span>Icy Infusions</span>
              </div>
            </div>
            <div className="banner__content-column2">
              <h1> To Every Tea Lovers,</h1>
              <p>
                Sip on our handcrafted teas, brewed with passion and dedication.
                Immerse yourself in the essence of ancient Asian tea
                craftsmanship with every sip. Taste the difference in every cup,
                crafted just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
