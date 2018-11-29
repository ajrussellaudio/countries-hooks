import React from "react";

export const Option = ({ name, alpha3Code }) => (
  <option value={alpha3Code}>{name}</option>
);
