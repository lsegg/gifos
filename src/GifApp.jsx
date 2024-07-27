import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import Footer from "./components/Footer";

export const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifApp</h1>
      <main className="Main">
        <AddCategory onNewCategory={handleAddCategory} />
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </main>
      <Footer />
    </>
  );
};
