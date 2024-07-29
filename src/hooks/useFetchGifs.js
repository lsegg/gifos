import { useState, useEffect } from "react";
import { searchGifs } from "../helpers/searchGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNewGifs = async () => {
    const newGifs = await searchGifs(category);
    setGifs(newGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getNewGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
