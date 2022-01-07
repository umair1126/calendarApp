import CountryCalendar from "./CountryCalendar";
import CountryYear from "./CountryYear";

import React from "react";
import { useState } from "react";

function App() {
  const [countryCode, setCountryCode] = useState("uk");
  const getCountryCode = (code) => {
    setCountryCode(code);
  };
  return (
    <div className="App ui container">
      <h1>Calendar</h1>
      <div className="ui segment">
        <CountryYear country={getCountryCode} />
        <CountryCalendar countryCode={countryCode} />
      </div>
    </div>
  );
}

export default App;
