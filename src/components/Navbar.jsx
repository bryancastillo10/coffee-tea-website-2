// Images
import Logo from "src/assets/images/company_logo.png";

// Icons 
import MobileMenu from "src/assets/icons/menu.svg"
import Close from "src/assets/icons/close.svg"

// Array and Components
import NavMenu from "src/arrays/NavMenu.js";
import Button from "src/components/Button.jsx";

// Dependency: react-router-DOM
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <header>
          <nav className="nav__container">
            {/* Left: Logo */}
            <div className="nav__logo">
                <img src={Logo} alt="company logo" />
                <h1>Espresso&TeaCo.</h1>
            </div>
            
            {/* Hamburger Menu for Mobile */}
            <div className="nav__menu-mobile">
              <img src={MobileMenu} alt="hamburger-menu" />
            </div>

            {/* Right: Navigation List */}
            <div className="nav__menu-list">
              <ul>
                {NavMenu.map((menu) => {
                  return <li key={menu.id}>
                    <NavLink to={menu.link}>{menu.name}</NavLink></li>
                })}
               <NavLink to='/order'><Button text="Order Now"/></NavLink>
              </ul>
            </div>

          </nav>
      </header>
  )
}

export default Navbar
