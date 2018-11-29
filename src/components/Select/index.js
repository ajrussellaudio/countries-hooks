import React from "react";

export const Select = ({ onChange, children }) => (
  <select id="country-select" onChange={event => onChange(event.target.value)}>
    {children}
  </select>
);
