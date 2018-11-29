import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants";

export const Detail = ({ code }) => {
  const [country, setCountry] = useState(null);

  useEffect(
    () => {
      console.log(`Fetching ${code}...`);
      fetch([BASE_URL, "alpha", code].join("/"))
        .then(res => res.json())
        .then(setCountry);
    },
    [code]
  );

  // if (!country) return null;

  return (
    country && (
      <div className="details">
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
      </div>
    )
  );
};
