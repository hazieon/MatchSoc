import React from "react";

function SearchInput({ captureInput }) {
  return <input placeholder="Search..." onChange={(e) => captureInput(e)} />;
}

export default SearchInput;
