import GifItem from "../components/GifItem";
import GifAction from "./GifAction";

import { useFetchTrending } from "../hooks/useFetchTrending";
const Trending = () => {
  const { gifs } = useFetchTrending();

  return (
    <section className="Trending">
      <h2 className="Trending-title">Trending GIFOS</h2>
      <p className="Trending-description">
        Check out the latest GIFOS from our community.
      </p>
      <div className="Trending-gifs">
        <GifAction action="sliderLeft" />
        <div className="Trending-gifs-carousel">
          {gifs?.map(({ id, title, url }) => (
            <GifItem key={id} title={title} url={url} />
          ))}
        </div>
        <GifAction action="sliderRight" />
      </div>
    </section>
  );
};

export default Trending;
