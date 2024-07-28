import logo from "../assets/imgs/logo-mobile.svg";
import burger from "../assets/imgs/burger.svg";

const Header = () => {
  return (
    <header className="Header">
      <nav className="Header-navbar">
        <div className="Header-navbar-logo-container">
          <img src={logo} alt="logo" className="Header-navbar-logo-img" />
        </div>
        <div className="Header-navbar-menu">
          <button className="Header-navbar-menu-button">
            <img
              src={burger}
              alt="boton menu"
              className="Header-navbar-menu-icon"
              aria-label="menu de navegacion"
            />
          </button>
          <ul className="Header-navbar-menu-list">
            <li className="Header-navbar-menu-item">
              <a href="">Dark Mode</a>
            </li>
            <li className="Header-navbar-menu-item">
              <a href="">Favourites</a>
            </li>
            <li className="Header-navbar-menu-item">
              <a href="">My gifos</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
