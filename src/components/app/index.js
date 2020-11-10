import React, { useState, useEffect } from "react";
import SearchPage from "../SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
function App() {
  const [userData, setUserData] = useState([]);
  const [input, setInput] = useState("");
  const [userInfoData, setUserInfoData] = useState("");
  //use effect to GET all the page data

  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:5000/");
      let data = await res.json();
      setUserData(data.payload);
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
        setUserData(data.payload);
      }
      getSpecificData();
    }
  }, [input]);

  function returnSingleUserData(userObject) {
    setUserInfoData(userObject);
  }
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
              setInput={setInput}
              userData={userData}
              returnSingleUserData={returnSingleUserData}
              userInfoData={userInfoData}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
