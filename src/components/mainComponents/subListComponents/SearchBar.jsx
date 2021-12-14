import React from "react";
import { useState } from "react";
const SearchBar = (props) => {
  const { selectedState, setFilters, filters } = props;
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setFilters({
      breweryType: filters.breweryType,
      search: search,
      filterCities: filters.filterCities,
    });
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <h1>List of Breweries from {selectedState}</h1>
      <header class="search-bar">
        <form
          id="search-breweries-form"
          autocomplete="off"
          onSubmit={handleSubmit}
        >
          <label for="search-breweries">
            <h2>Search breweries:</h2>
          </label>
          <input
            id="search-breweries"
            name="search-breweries"
            type="text"
            onChange={handleChange}
          />
        </form>
      </header>
    </>
  );
};

export default SearchBar;
