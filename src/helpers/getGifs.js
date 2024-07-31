const VITE_GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const GIF_LIMIT = 10;

export const getGifs = async (action, category = "") => {
  const url = `https://api.giphy.com/v1/gifs/${action}?api_key=${VITE_GIPHY_API_KEY}&q=${category}&limit=${GIF_LIMIT}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
};
