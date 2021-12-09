import React from "react";

const TypeFilterSection = () => {
  return (
    <form id="filter-by-type-form" autocompete="off">
      <label for="filter-by-type">
        <h3>Type of Brewery</h3>
      </label>
      <select name="filter-by-type" id="filter-by-type">
        <option value="">Select a type...</option>
        <option value="micro">Micro</option>
        <option value="regional">Regional</option>
        <option value="brewpub">Brewpub</option>
      </select>
    </form>
  );
};

export default TypeFilterSection;
