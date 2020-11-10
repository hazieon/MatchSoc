import React, { useState, useEffect } from "react";
import SearchInput from "../SearchInput";
import SearchPage from "../SearchPage";
import UserInfo from "../UserInfo";
import UserList from "../UserList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  const [specificData, setSpecificData] = useState([]);
  const [input, setInput] = useState("");
  const [button, setButton] = useState(false);

  function handleButton() {
    setButton(!button);
  }

  function captureInput(event) {
    setInput(event.target.value);
    console.log(input);
    event.target.value = "";
  }

  //use effect to GET all the page data
  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:5000/");
      let data = await res.json();
      setUserData(data.payload);
      console.log(data.payload);
    }
    getData();
  }, [button]);

  //use effect to get data based on search query
  useEffect(() => {
    if (input) {
      async function getSpecificData() {
        // TODO:add {input to url below}
        let res = await fetch(`http://localhost:5000/?search=${input}`);
        let data = await res.json();
        setSpecificData(data.payload);
        console.log(data);
      }
      getSpecificData();
    }
  }, [input]);

  return (
    <Router>
      <div id="main-page-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <SearchPage
              captureInput={captureInput}
              specificData={specificData}
              userData={userData}
            />
            <button onClick={handleButton}>Get Data</button>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//<UserList data={userData} />
