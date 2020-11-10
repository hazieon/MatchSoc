import React, { useState, useEffect } from "react";
import SearchInput from "../searchInput";
import SearchPage from "../SearchPage";
import UserInfo from "../userInfo";
import UserList from "../userList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  const [specificData, setSpecificData] = useState([]);
  const [input, setInput] = useState("");

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
      setUserData(data);
      console.log(data);
    }
    getData();
  }, []);

  //use effect to get data based on search query
  useEffect(() => {
    if (input) {
      async function getSpecificData() {
        // TODO:add {input to url below}
        let res = await fetch(`http://localhost:5000/?search=${input}`);
        let data = await res.json();
        setSpecificData(data);
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
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//<UserList data={userData} />
