import GifItem from "../components/GifItem";
import sliderLeft from "../assets/imgs/button-slider-left.svg";
import sliderRight from "../assets/imgs/Button-Slider-right.svg";
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
        <button className="Trending-gifs-arrow">
          <img src={sliderLeft} alt="carousel-button" />
        </button>
        <div className="Trending-gifs-carousel">
          {gifs.map(({ id, title, url }) => (
            <GifItem section="Trending" key={id} title={title} url={url} />
          ))}
        </div>
        <button className="Trending-gifs-arrow">
          <img src={sliderRight} alt="carousel-button" />
        </button>
      </div>
    </section>
  );
};

export default Trending;
