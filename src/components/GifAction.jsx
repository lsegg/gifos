import { PropTypes } from "prop-types";
import favourite from "../assets/imgs/icon-fav.svg";
import favouriteHover from "../assets/imgs/icon-fav-hover.svg";
import download from "../assets/imgs/icon-download.svg";
import downloadHover from "../assets/imgs/icon-download-hover.svg";
import maximize from "../assets/imgs/icon-max-normal.svg";
import maximizeHover from "../assets/imgs/icon-max-hover.svg";
import sliderLeft from "../assets/imgs/button-slider-left.svg";
import sliderLeftHover from "../assets/imgs/button-slider-left-hover.svg";
import sliderRight from "../assets/imgs/Button-Slider-right.svg";
import sliderRightHover from "../assets/imgs/Button-Slider-right-hover.svg";
import { useState } from "react";

const ACTIONS = {
  favourite: {
    default: favourite,
    hover: favouriteHover,
  },
  download: {
    default: download,
    hover: downloadHover,
  },
  maximize: {
    default: maximize,
    hover: maximizeHover,
  },
  sliderLeft: {
    default: sliderLeft,
    hover: sliderLeftHover,
  },
  sliderRight: {
    default: sliderRight,
    hover: sliderRightHover,
  },
};

const GifAction = ({ action }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={isHovered ? ACTIONS[action].hover : ACTIONS[action].default}
      alt={action}
      className="Search-result-gif-overlay-wrapper-action"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

GifAction.propTypes = {
  action: PropTypes.string.isRequired,
};

export default GifAction;
