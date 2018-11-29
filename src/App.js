import React, { useState, useEffect } from "react";
import { Select } from "./components/Select";
import { Option } from "./components/Option";
import { Detail } from "./components/Detail";
import { BASE_URL } from "./constants";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  useEffect(
    () => {
      console.log("Fetching all countries");
      fetch([BASE_URL, "all"].join("/"))
        .then(res => res.json())
        .then(setCountries);
    },
    [BASE_URL]
  );

  return (
    <div className="App">
      <Select onChange={setSelectedCountryCode}>
        <Option index={null} name="Select a country" />
        {countries.map((country, i) => (
          <Option key={country.alpha3Code} index={i} {...country} />
        ))}
      </Select>
      {selectedCountryCode && <Detail code={selectedCountryCode} />}
    </div>
  );
};

export default App;
