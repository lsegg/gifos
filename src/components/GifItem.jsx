import { PropTypes } from "prop-types";

const GifItem = ({ title, url }) => {
  return (
    <div className="Search-result">
      <img src={url} alt={title} className="Search-result-gif" />
      <div className="Search-result-gif-overlay">
        <p>{title}</p>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifItem;
