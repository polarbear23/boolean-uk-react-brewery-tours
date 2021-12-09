import React from "react";

const CityCheckbox = (props) => {
  const { city } = props;
  return (
    <>
      <input type="checkbox" name={city} value={city} />
      <label for={city}>{city}</label>
    </>
  );
};

export default CityCheckbox;
