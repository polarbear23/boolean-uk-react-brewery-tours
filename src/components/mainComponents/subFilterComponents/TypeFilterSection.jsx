import React from "react";

const TypeFilterSection = (props) => {
  const { filters, setFilters } = props;

  const handleChange = (event) => {
    console.log(event);
    setFilters({
      breweryType: event.target.value,
      search: filters.search,
      filterCities: filters.filterCities,
    });
  };
  return (
    <form id="filter-by-type-form" autocompete="off">
      <label for="filter-by-type">
        <h3>Type of Brewery</h3>
      </label>
      <select name="filter-by-type" id="filter-by-type" onChange={handleChange}>
        <option value="">Select a type...</option>
        <option value="micro">Micro</option>
        <option value="regional">Regional</option>
        <option value="brewpub">Brewpub</option>
      </select>
    </form>
  );
};

export default TypeFilterSection;
