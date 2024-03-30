// Images
import Logo from "src/assets/images/company_logo.png";

// Icons
import MobileMenu from "src/assets/icons/menu.svg";
import Close from "src/assets/icons/close.svg";
import coffeeCup from "src/assets/icons/coffee-cup.svg";
// Array and Components
import NavMenu from "src/arrays/NavMenu.js";
import Button from "src/components/ui/Button.jsx";

// Use State and Dependency: react-router-DOM
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <nav className="nav__container">
        {/* Left: Logo */}
        <div className="nav__logo">
          <img src={Logo} alt="company logo" />
          <h1>Espresso&TeaCo.</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="nav__menu-mobile"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <img src={openMenu ? Close : MobileMenu} alt="hamburger-menu" />
        </div>

        {/* Right: Navigation List */}
        <div className="nav__links">
          <ul className={openMenu ? "open" : ""}>
            {NavMenu.map((menu) => {
              return (
                <li key={menu.id}>
                  <NavLink to={menu.link}>{menu.name}</NavLink>
                </li>
              );
            })}
            <NavLink to="/order">
              <Button text="Order Now" image={coffeeCup} />
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
