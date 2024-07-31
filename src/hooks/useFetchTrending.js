import { useState, useEffect } from "react";
import { getTrendingSearches } from "../helpers/getTrendingSearches";
import { getGifs } from "../helpers/getGifs";

export const useFetchTrending = () => {
  const [gifs, setGifs] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTrending = async () => {
    const newGifs = await getGifs("trending");
    const newTopics = await getTrendingSearches();
    setGifs(newGifs);
    setTopics(newTopics);
    setIsLoading(false);
  };

  useEffect(() => {
    getTrending();
  }, []);

  const trending = {
    gifs,
    topics,
    isLoading,
  };

  return trending;
};
