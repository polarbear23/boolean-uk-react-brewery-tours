import React from "react";
import CityFilterSection from "./subFilterComponents/CityFilterSection";
import TypeFilterSection from "./subFilterComponents/TypeFilterSection";
const FilterSection = (props) => {
  const { breweries, filters, setFilters, selectedState } = props;
  return (
    <aside class="filters-section">
      <h2>Filter By:</h2>
      <TypeFilterSection filters={filters} setFilters={setFilters} />
      <CityFilterSection
        breweries={breweries}
        filters={filters}
        setFilters={setFilters}
        selectedState={selectedState}
      />
    </aside>
  );
};

export default FilterSection;
