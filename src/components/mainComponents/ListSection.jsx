import React from "react";
import SearchBar from "./subListComponents/SearchBar";
import BreweriesListItem from "./subListComponents/BreweriesListItem";
const ListSection = (props) => {
  const { breweries, selectedState, setFilters, filters } = props;
  return (
    <>
      <SearchBar
        selectedState={selectedState}
        setFilters={setFilters}
        filters={filters}
      />

      <article>
        <ul class="breweries-list">
          {breweries.map((brewery) => {
            return <BreweriesListItem brewery={brewery} />;
          })}
        </ul>
      </article>
    </>
  );
};

export default ListSection;
