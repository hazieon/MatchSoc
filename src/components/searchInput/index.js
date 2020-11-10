import React from "react";
import "./SearchInput.css";
function SearchInput({ setInput }) {
  return (
    <input placeholder="Search..." onKeyUp={(e) => setInput(e.target.value)} />
  );
}
export default SearchInput;
