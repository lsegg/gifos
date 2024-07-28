import header from "../assets/imgs/search-illustration.svg";
import search from "../assets/imgs/icon-search.svg";
import { useState } from "react";
import { PropTypes } from "prop-types";

const Search = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <section className="Search">
      <h1 className="Search-title">
        Get inspired, search,{" "}
        <span className="Search-title-newLine">save, and create the </span>
        <span className="Search-title-newLine">
          best <span className="Search-title-highlight">GIFOS</span>
        </span>
      </h1>
      <img src={header} alt="illustration" className="Search-img" />
      <div className="Search-searchBar">
        <form onSubmit={handleSubmit} aria-label="search">
          <label htmlFor="searchbar">
            <input
              type="text"
              placeholder="search GIFs and more"
              value={inputValue}
              onChange={handleInputChange}
            />
          </label>
          <img
            src={search}
            alt="gifos illustration"
            className="Search-searchBar-img"
          />
        </form>
      </div>
      <div className="Search-trending">
        <h4 className="Search-trending-title">Trending&#58;</h4>
        <div className="Search-trending-topics"></div>
      </div>
    </section>
  );
};

Search.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

export default Search;
