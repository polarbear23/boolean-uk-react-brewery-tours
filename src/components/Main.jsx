import React from "react";
import FilterSection from "./mainComponents/FilterSection";
import ListSection from "./mainComponents/ListSection";
import { useState, useEffect } from "react";
const Main = (props) => {
  const { breweries, setBreweries, selectedState } = props;
  const [filters, setFilters] = useState({
    breweryType: "",
    filterCities: [],
  });

  const cleanDataByFilters = (data) => {
    let filteredData = data;
    if (filters.breweryType.length > 0) {
      filteredData = data.filter(
        (brewery) => brewery.brewery_type === filters.breweryType
      );
    }
    if (filters.filterCities.length > 0) {
      filteredData = data.filter((brewery) => {
        for (let i = 0; i < filters.filterCities.length; i++) {
          if (brewery.city === filters.filterCities[i]) {
            return brewery;
          }
        }
      });
    }

    return filteredData;
  };

  const cleanData = (data) => {
    const typeFilteredData = data.filter((brewery) => {
      if (
        brewery.brewery_type === "micro" ||
        brewery.brewery_type === "brewpub" ||
        brewery.brewery_type === "regional"
      ) {
        return brewery;
      } else {
        return false;
      }
    });

    const newData = typeFilteredData.filter((brewery, index) => index < 10);

    return newData;
  };

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${selectedState}`)
      .then((res) => res.json())
      .then((data) => {
        const newData = cleanData(data);
        const filteredData = cleanDataByFilters(newData);
        setBreweries(filteredData);
      });
  }, [filters, selectedState]);

  return (
    <main>
      <FilterSection
        breweries={breweries}
        setFilters={setFilters}
        filters={filters}
        selectedState={selectedState}
      />

      <ListSection breweries={breweries} selectedState={selectedState} />
    </main>
  );
};

export default Main;
