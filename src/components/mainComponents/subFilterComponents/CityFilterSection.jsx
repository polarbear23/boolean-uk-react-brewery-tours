import React from "react";
import CityCheckbox from "./CityCheckbox";
const CityFilterSection = (props) => {
  const { filters, setFilters, cities } = props;

  const handleClick = () => {
    setFilters({
      breweryType: filters.breweryType,
      search: filters.search,
      filterCities: [],
    });
  };
  return (
    <>
      <div class="filter-by-city-heading">
        <h3>Cities</h3>
        <button class="clear-all-btn" onClick={handleClick}>
          clear all
        </button>
      </div>
      <form id="filter-by-city-form">
        {cities.map((city) => {
          return (
            <CityCheckbox
              city={city}
              filters={filters}
              setFilters={setFilters}
            />
          );
        })}
      </form>
    </>
  );
};

export default CityFilterSection;
