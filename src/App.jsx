import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
export default function App() {
  const [breweries, setBreweries] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [inputState, setInputState] = useState("");
  console.log("State: ", { breweries, selectedState });

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${selectedState}`)
      .then((res) => res.json())
      .then((data) => {
        const newData = cleanData(data);
        setBreweries(newData);
      });
  }, [selectedState]);

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

    const newData = typeFilteredData.filter((brewery, index) => index < 20);

    return newData;
  };

  const handleSelectStateForm = (event) => {
    event.preventDefault();
    console.log("Inside handleSelectStateForm: ", event.target);
    setSelectedState(inputState);
  };

  const handleSelectStateInput = (event) => {
    console.log("Inside handleSelectStateInput: ", event.target.value);
    setInputState(event.target.value);
  };

  return (
    <>
      <Header
        handleSubmit={handleSelectStateForm}
        handleInput={handleSelectStateInput}
      />
      <Main
        breweries={breweries}
        setBreweries={setBreweries}
        selectedState={selectedState}
      />
    </>
  );
}
