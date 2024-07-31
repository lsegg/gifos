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
          alt="close menu"
          className="Header-navbar-button-icon"
          aria-label="menu de navegacion"
        />
      </button>
      <div className={`Header-navbar-menu${isOpen ? "--isOpen" : ""}`}>
        <a className="Header-navbar-menu-item" href="/dark">
          Dark Mode
        </a>
        <a className="Header-navbar-menu-item" href="/fav">
          Favourites
        </a>
        <a className="Header-navbar-menu-item" href="/my">
          My gifos
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
