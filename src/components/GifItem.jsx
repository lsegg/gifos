import { PropTypes } from "prop-types";
import GifAction from "../components/GifAction";

const GifItem = ({ title, url }) => {
  return (
    <div className="Search-result">
      <img src={url} alt={title} className="Search-result-gif" />
      <div className="Search-result-gif-overlay">
        <span className="Search-result-gif-overlay-wrapper">
          <GifAction action="favourite" />
          <GifAction action="download" />
          <GifAction action="maximize" />
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
