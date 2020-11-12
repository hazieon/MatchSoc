import React from "react";
import "./searchinput.css";
function SearchInput({ setInput }) {
  return (
    <input id="search-input-component" placeholder="Search..." onKeyUp={(e) => setInput(e.target.value)} />
  );
}
export default SearchInput;
