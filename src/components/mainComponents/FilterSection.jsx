import React from "react";
import CityFilterSection from "./subFilterComponents/CityFilterSection";
import TypeFilterSection from "./subFilterComponents/TypeFilterSection";
const FilterSection = (props) => {
  const { breweries } = props;
  return (
    <aside class="filters-section">
      <h2>Filter By:</h2>
      <TypeFilterSection />
      <CityFilterSection breweries={breweries} />
    </aside>
  );
};

export default FilterSection;
