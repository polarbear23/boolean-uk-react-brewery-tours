import { useState } from "react";

import Header from "./components/Header";

export default function App() {
  const [breweries, setBreweries] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  console.log("State: ", { breweries, selectedState });

  const handleSelectStateForm = (event) => {
    event.preventDefault();

    console.log("Inside handleSelectStateForm: ", event.target);
  };

  const handleSelectStateInput = (event) => {
    console.log("Inside handleSelectStateInput: ", event.target.value);
  };

  return (
    <>
      <Header
        handleSubmit={handleSelectStateForm}
        handleInput={handleSelectStateInput}
      />
      <main>
        {/* Ṛest of components will go here
         */}
      </main>
    </>
  );
}
