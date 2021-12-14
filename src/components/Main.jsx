import React from "react";
import FilterSection from "./mainComponents/FilterSection";
import ListSection from "./mainComponents/ListSection";
import { useState, useEffect } from "react";
const Main = (props) => {
  const { breweries, setBreweries, selectedState } = props;
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState({
    breweryType: "",
    search: "",
    filterCities: [],
  });

  const extractCityData = (breweries) => {
    const citiesArray = breweries.map((brewery) => {
      return brewery.city;
    });
    console.log("cities", citiesArray);
    const citiesNewData = [...new Set(citiesArray)];
    return citiesNewData;
  };

  const cleanDataByFilters = (data) => {
    let filteredData = data;

    if (filters.search.length > 0) {
      filteredData = data.filter((brewery) => {
        if (brewery.name.toUpperCase() === filters.search.toUpperCase()) {
          return brewery;
        } else if (
          brewery.city.toUpperCase() === filters.search.toUpperCase()
        ) {
          return brewery;
        }
      });
      setBreweries(filteredData);
    }

    if (filters.breweryType.length > 0) {
      filteredData = data.filter(
        (brewery) => brewery.brewery_type === filters.breweryType
      );
      setBreweries(filteredData);
    }
    if (filters.filterCities.length > 0) {
      filteredData = filteredData.filter((brewery) => {
        for (let i = 0; i < filters.filterCities.length; i++) {
          if (brewery.city === filters.filterCities[i]) {
            return brewery;
          }
          return false;
        }
      });
      setBreweries(filteredData);
    }
    setBreweries(filteredData);
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
        cleanDataByFilters(newData);
        setCities(extractCityData(newData));
      });
  }, [filters, selectedState]);

  return (
    <main>
      <FilterSection
        breweries={breweries}
        setFilters={setFilters}
        filters={filters}
        selectedState={selectedState}
        cities={cities}
      />

      <ListSection
        breweries={breweries}
        selectedState={selectedState}
        setFilters={setFilters}
        filters={filters}
      />
    </main>
  );
};

export default Main;
