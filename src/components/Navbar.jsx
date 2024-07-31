import burger from "../assets/imgs/burger.svg";
import close from "../assets/imgs/close.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Header-navbar">
      <button className="Header-navbar-button" onClick={handleOpenMenu}>
        <img
          src={isOpen ? close : burger}
          alt="boton menu"
          className="Header-navbar-button-icon"
          aria-label="menu de navegacion"
        />
      </button>
      <div className={`Header-navbar-menu${isOpen ? "--isOpen" : ""}`}>
        <a className="Header-navbar-menu-item" href="">
          Dark Mode
        </a>
        <a className="Header-navbar-menu-item" href="">
          Favourites
        </a>
        <a className="Header-navbar-menu-item" href="">
          My gifos
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
