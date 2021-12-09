import React from "react";
import { useState, useEffect } from "react";
import CityCheckbox from "./CityCheckbox";
const CityFilterSection = (props) => {
  const { breweries } = props;
  const [cities, setCities] = useState([]);

  const extractCityData = (breweries) => {
    const citiesArray = breweries.map((brewery) => {
      return brewery.city;
    });
    console.log("cities", citiesArray);
    const citiesNewData = [...new Set(citiesArray)];
    return citiesNewData;
  };

  useEffect(() => {
    setCities(extractCityData(breweries));
  }, [breweries]);

  return (
    <>
      <div class="filter-by-city-heading">
        <h3>Cities</h3>
        <button class="clear-all-btn">clear all</button>
      </div>
      <form id="filter-by-city-form">
        {cities.map((city) => {
          return <CityCheckbox city={city} />;
        })}
      </form>
    </>
  );
};

export default CityFilterSection;
