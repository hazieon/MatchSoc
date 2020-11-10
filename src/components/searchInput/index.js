import React from "react";
import "./SearchInput.css";

function SearchInput({ captureInput }) {
  return <input placeholder="Search..." onChange={(e) => captureInput(e)} />;
}

export default SearchInput;
