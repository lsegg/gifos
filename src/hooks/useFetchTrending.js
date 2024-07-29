import { useState, useEffect } from "react";
import { getTrendingSearches } from "../helpers/getTrendingSearches";

export const useFetchTrending = () => {
  // const [gifs, setGifs] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTrending = async () => {
    const newTopics = await getTrendingSearches();
    setTopics(newTopics);
    setIsLoading(false);
  };

  useEffect(() => {
    getTrending();
  }, []);

  const trending = {
    // gifs,
    topics,
    isLoading,
  };

  return trending;
};
