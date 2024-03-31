// Array
import {FootList, FootListTwo} from "src/arrays/FooterList.js";

// React-Router-Dom Dependency
import { Link } from "react-router-dom";

// Component
import Social from "src/components/Social.jsx";

const Footer = () => {
  return (
    <section className="footer__background">
      <div className="footer__wrapper">
        <div className="footer__container">
          <div className="footer__info">
              <h1>Espresso&TeaCo.</h1>
              <p>Roasted Coffee and Tea, Cozy Vibes, Unforgettable Moments, Your Perfect
              Espresso Escapade</p>
              <div className="footer__info-badge brown-gradient">
                <span>Web Design by Bryan</span>
              </div>
          </div>
          <div className="footer__link-container">
            <div className="footer__link">
            <h1>Quick Links</h1><ul>
            {FootList.map((element)=>{
              return <li key={element.id}><Link to={element.link}>{element.title}</Link></li>
              
            })}</ul></div>
              <div className="footer__link">
              <h1>More Info</h1><ul>
              {FootListTwo.map((element)=>{
                return  <li key={element.id}><Link to={element.link}>{element.title}</Link></li>
                
              })}</ul>
              </div>

          <div className="footer__address">
                  <h1>Store Location:</h1>
                  <p>G/F Eastwood City Walk 2, 2<span>nd</span> St., Bagumbayan, Quezon City,
                  1110, Metro Manila, Philippines</p>
                  <p>+639 12345678</p>
                  <div className="footer__address-social"><Social/></div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Footer;
