const VITE_GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const TRENDING_LIMIT = 5;

export const getTrendingSearches = async () => {
  const url = `https://api.giphy.com/v1/trending/searches?api_key=${VITE_GIPHY_API_KEY}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const trending = data?.splice(0, TRENDING_LIMIT).join(", ");
  return trending;
};
