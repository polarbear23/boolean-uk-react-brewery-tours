import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
export default function App() {
  const [breweries, setBreweries] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  console.log("State: ", { breweries, selectedState });

  return (
    <>
      <Header setSelectedState={setSelectedState} />
      <Main
        breweries={breweries}
        setBreweries={setBreweries}
        selectedState={selectedState}
      />
    </>
  );
}
