import { PropTypes } from "prop-types";
import favourite from "../assets/imgs/icon-fav.svg";
import favouriteHover from "../assets/imgs/icon-fav-hover.svg";
import download from "../assets/imgs/icon-download.svg";
import downloadHover from "../assets/imgs/icon-download-hover.svg";
import maximize from "../assets/imgs/icon-max-normal.svg";
import maximizeHover from "../assets/imgs/icon-max-hover.svg";
import { useState } from "react";

const GifItem = ({ title, url }) => {
  const [isFavHovered, setIsFavHovered] = useState(false);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  const [isMaxHovered, setIsMaxHovered] = useState(false);

  return (
    <div className="Search-result">
      <img src={url} alt={title} className="Search-result-gif" />
      <div className="Search-result-gif-overlay">
        <span className="Search-result-gif-overlay-wrapper">
          <img
            src={isFavHovered ? favouriteHover : favourite}
            alt="favourite"
            className="Search-result-gif-overlay-wrapper-action"
            onMouseEnter={() => setIsFavHovered(true)}
            onMouseLeave={() => setIsFavHovered(false)}
          />
          <img
            src={isDownloadHovered ? downloadHover : download}
            alt="download"
            className="Search-result-gif-overlay-wrapper-action"
            onMouseEnter={() => setIsDownloadHovered(true)}
            onMouseLeave={() => setIsDownloadHovered(false)}
          />
          <img
            src={isMaxHovered ? maximizeHover : maximize}
            alt="maximize"
            className="Search-result-gif-overlay-wrapper-action"
            onMouseEnter={() => setIsMaxHovered(true)}
            onMouseLeave={() => setIsMaxHovered(false)}
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
