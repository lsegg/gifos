import { PropTypes } from "prop-types";
import GifAction from "../components/GifAction";

const GifItem = ({ title, url }) => {
  return (
    <div className="GifItem">
      <img src={url} alt={title} className="GifItem-gif" />
      <div className="GifItem-gif-overlay">
        <span className="GifItem-gif-overlay-wrapper">
          <GifAction action="favourite" />
          <GifAction action="download" />
          <GifAction action="maximize" />
        </span>
        <p className="GifItem-gif-overlay-title">{title}</p>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifItem;
