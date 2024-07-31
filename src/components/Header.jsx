import logo from "../assets/imgs/logo-mobile.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="Header">
      <a
        href="https://github.com/lsegg/gifos"
        target="_black"
        rel="noopener noreferrer"
        className="Header-logo-container"
      >
        <img src={logo} alt="logo" className="Header-navbar-logo-img" />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
