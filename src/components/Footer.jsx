import facebook from "../assets/imgs/icon-facebook.svg";
import twitter from "../assets/imgs/icon-twitter.svg";
import instagram from "../assets/imgs/icon-instagram.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="Footer">
      <div className="Footer-social">
        <span className="Footer-social-text">Share&#58;</span>
        <span className="Footer-social-networks">
          <img src={facebook} alt="facebook" className="Footer-social-icon" />
          <img src={twitter} alt="twitter" className="Footer-social-icon" />
          <img src={instagram} alt="instagram" className="Footer-social-icon" />
        </span>
      </div>
      <div className="Footer-copyright">
        &copy; GIFOS {currentYear}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
