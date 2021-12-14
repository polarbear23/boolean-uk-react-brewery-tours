import React from "react";

const CityCheckbox = (props) => {
  const { city, filters, setFilters } = props;

  const handleChange = (event) => {
    const { value, checked } = event.target;

    if (checked === true) {
      const newFilterCities = [...filters.filterCities, value];
      console.log("filterCities", newFilterCities);
      console.log(filters.filterCities.some((cityName) => cityName === city));
      setFilters({
        breweryType: filters.breweryType,
        search: filters.search,
        filterCities: [...newFilterCities],
      });
    }
    if (checked === false) {
      const oldFilterCities = [...filters.filterCities];
      oldFilterCities.splice(oldFilterCities.indexOf(value), 1);
      const newFilterCities = [...oldFilterCities];
      console.log("filterCities", newFilterCities);
      console.log(filters.filterCities.some((cityName) => cityName === city));
      setFilters({
        breweryType: filters.breweryType,
        search: filters.search,
        filterCities: [...newFilterCities],
      });
    }
  };

  return (
    <>
      <input
        type="checkbox"
        name={city}
        value={city}
        onChange={handleChange}
        checked={filters.filterCities.some((cityName) => cityName === city)}
      />
      <label for={city}>{city}</label>
    </>
  );
};

export default CityCheckbox;
