import instagram from "../assets/imgs/icon_instagram.svg";
import facebook from "../assets/imgs/icon_facebook.svg";
import twitter from "../assets/imgs/icon-twitter.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="Footer">
      <div className="Footer-social">
        <span className="Footer-social-text">Share&#58;</span>
        <span className="Footer-social-networks">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt="instagram"
              className="Footer-social-icon"
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" className="Footer-social-icon" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" className="Footer-social-icon" />
          </a>
        </span>
      </div>
      <div className="Footer-copyright">
        &copy; GIFOS {currentYear}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
