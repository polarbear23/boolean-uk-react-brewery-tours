import React from "react";
import SearchBar from "./subListComponents/SearchBar";
import BreweriesListItem from "./subListComponents/BreweriesListItem";
const ListSection = (props) => {
  const { breweries } = props;
  return (
    <>
      <SearchBar />

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
