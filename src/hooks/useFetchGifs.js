import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNewGifs = async () => {
    const newGifs = await getGifs("search", category);
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
