import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { PropTypes } from "prop-types";

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="GifGrid-title">{category}</h3>
      {isLoading && <h2>Loading...</h2>}
      <div className="GifGrid" key={category}>
        {gifs?.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
