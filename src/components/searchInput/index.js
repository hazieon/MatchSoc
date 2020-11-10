import React, { useState } from "react";

function SearchInput() {
  const [specificData, setSpecificData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function getSpecificData() {
      // TODO:add {input to url below}
      let res = await fetch("https://localhost:5000/");
      let data = await res.json();
      setSpecificData(data);
    }
    getSpecificData();
  }, [input]);

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(event) => setInput(event.target.value)}
    />
  );
}

export default SearchInput;
