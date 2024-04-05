import AppStore from "src/assets/images/app_store.png";
import GooglePlay from "src/assets/images/play_store.png";

const MobileAds = () => {
  return <section className="mobile__background">
    <div className="mobile__container">
      <div className="mobile__header">
      <h1>Espresso&Tea Co. Delivery is now available 
        on Android or Apple IOS. You can download it here.
      </h1>
      </div>
      <div className="mobile__image-section">
      <img src={AppStore} alt="apple-logo" />
      <img src={GooglePlay} alt="google-play-logo" />
      </div>
    </div>
  </section>;
};

export default MobileAds;
