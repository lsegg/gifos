import facebook from "../assets/imgs/icon-facebook.svg";
import twitter from "../assets/imgs/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-social">
        <span className="Footer-social-text">Share&#58;</span>
        <span className="Footer-social-networks">
          <img src={facebook} alt="facebook" className="Footer-social-icon" />
          <img src={twitter} alt="twitter" className="Footer-social-icon" />
          <img
            src="assets/icon_instagram.svg"
            alt=""
            className="Footer-social-icon"
          />
        </span>
      </div>
      <div className="Footer-copyright">
        &copy; GIFOS 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
