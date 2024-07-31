import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import GifGrid from "./components/GifGrid";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleSearch = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <Header />
      <main className="Main">
        <Search onNewCategory={handleSearch} />
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
        <Trending />
      </main>
      <Footer />
    </>
  );
};

export default GifApp;
