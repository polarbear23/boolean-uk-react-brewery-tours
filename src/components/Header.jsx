import { useState } from "react";

export default function Header(props) {
  console.log("Inside Header: ", props);
  const { setSelectedState } = props;
  const [inputState, setInputState] = useState("");

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
    <header className="main-header">
      <section className="select-state-section">
        <h2>Welcome to Brewery Tours</h2>
        <form
          id="select-state-form"
          autoComplete="off"
          onSubmit={handleSelectStateForm}
        >
          <label htmlFor="select-state">Which state are you visiting?</label>
          <input
            id="select-state"
            name="select-state"
            type="text"
            onChange={handleSelectStateInput}
          />
        </form>
      </section>
    </header>
  );
}
