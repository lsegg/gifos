import { PropTypes } from "prop-types";
import favourite from "../assets/imgs/icon-fav.svg";
import download from "../assets/imgs/icon-download.svg";
import maximize from "../assets/imgs/icon-max.svg";

const GifItem = ({ title, url }) => {
  return (
    <div className="Search-result">
      <img src={url} alt={title} className="Search-result-gif" />
      <div className="Search-result-gif-overlay">
        <span className="Search-result-gif-overlay-wrapper">
          <img
            src={favourite}
            alt="favourite"
            className="Search-result-gif-overlay-wrapper-action"
          />
          <img
            src={download}
            alt="download"
            className="Search-result-gif-overlay-wrapper-action"
          />
          <img
            src={maximize}
            alt="maximize"
            className="Search-result-gif-overlay-wrapper-action"
          />
        </span>
        <p className="Search-result-gif-overlay-title">{title}</p>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifItem;
