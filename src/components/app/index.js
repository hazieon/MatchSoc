import React, { useState, useEffect } from "react";
import SearchPage from "../searchpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./app.css";
function App() {
  const [userData, setUserData] = useState([]);
  const [input, setInput] = useState(null);
  const [userInfoData, setUserInfoData] = useState("");
  
  //use effect to GET all the page data
  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:5000/");
      let data = await res.json();
      setUserData(data.payload);
      setUserInfoData(data.payload[0])
    }
    getData();
  }, []);

  //use effect to get data based on search query
  useEffect(() => {
    if (input || input === '') {
      async function getSpecificData() {
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
        <h2>SoC Unite</h2>
        <img id="page-logo" src='https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png' alt=''/>
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