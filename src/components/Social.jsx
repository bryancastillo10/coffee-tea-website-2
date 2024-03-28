import Facebook from "src/assets/icons/facebook.svg";
import Github from "src/assets/icons/github.svg";
import Instagram from "src/assets/icons/instagram.svg"

import "src/styles/ui-style/social.css";

const Social = () => {
  return (
    <div className="social__container">
      <img src={Facebook} alt="" className="social-icon" />
      <img src={Github} alt="" />
      <img src={Instagram} alt="" />
    </div>
  )
}

export default Social
