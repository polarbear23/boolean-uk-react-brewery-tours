import React from "react";
import FilterSection from "./mainComponents/FilterSection";
import ListSection from "./mainComponents/ListSection";
import { useState, useEffect } from "react";
const Main = (props) => {
  const { breweries, setBreweries, selectedState } = props;
  const { filters, setFilters } = useState({
    breweryType: "",
    filterCities: [],
  });
  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${selectedState}`)
      .then((res) => res.json())
      .then((data) => {});
  }, [filters]);
  return (
    <main>
      <FilterSection breweries={breweries} />

      <ListSection breweries={breweries} />
      {
        // Check filter-section.html
        // Check list-section.html
      }
    </main>
  );
};

export default Main;
