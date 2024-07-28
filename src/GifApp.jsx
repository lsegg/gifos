import { useState } from "react";
import Header from "./components/Header";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import Footer from "./components/Footer";

const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <Header />
      <main className="Main">
        {/* <AddCategory onNewCategory={handleAddCategory} />
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))} */}
      </main>
      <Footer />
    </>
  );
};

export default GifApp;
