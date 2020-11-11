import React, { useState, useEffect } from "react";
import SearchPage from "../searchpage";
import ComparePage from "../comparepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./app.css";
function App() {
  const [userData, setUserData] = useState([]);
  const [input, setInput] = useState(null);
  const [userInfoData, setUserInfoData] = useState("");
  const [bootcamperData, setBootcamperData] = useState([]);
  const [mentorData, setMentorData] = useState([]);
  const [bootcamperComparePanelData, setBootcamperComparePanelData] = useState(
    ""
  );
  const [mentorComparePanelData, setMentorComparePanelData] = useState("");

  // const [bootcamperButton, setBootcamperButton] = useState(false);
  // const [mentorButton, setMentorButton] = useState(false);

  //use effect to GET all the page data
  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:5000/");
      let data = await res.json();
      setUserData(data.payload);
      setUserInfoData(data.payload[0]);
    }
    getData();
  }, []);

  //use effect to get data based on search query
  useEffect(() => {
    if (input || input === "") {
      async function getSpecificData() {
        let res = await fetch(`http://localhost:5000/?search=${input}`);
        let data = await res.json();
        setUserData(data.payload);
      }
      getSpecificData();
    }
  }, [input]);

  useEffect(() => {
    async function getBootcamperData() {
      let res = await fetch("http://localhost:5000/bootcampers");
      let data = await res.json();
      setBootcamperData(data.payload);
      //setBootcamperButton(false);
      console.log(data.payload);
    }
    getBootcamperData();
  }, []);

  useEffect(() => {
    async function getMentorData() {
      let res = await fetch("http://localhost:5000/mentors");
      let data = await res.json();
      setMentorData(data.payload);
      // setMentorButton(false);
    }
    getMentorData();
  }, []);

  function returnSingleUserData(userObject) {
    setUserInfoData(userObject);
    console.log(userObject.isbootcamper);
  }

  function returnCompareSingleUserData(userObject) {
    if (userObject.isbootcamper === true) {
      setBootcamperComparePanelData(userObject);
    } else if (userObject.isbootcamper === false) {
      setMentorComparePanelData(userObject);
    }
  }

  return (
    <Router>
      <div id="main-page-container">
        <nav>
          <h2>SoC Unite</h2>
          <img
            id="page-logo"
            src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
            alt=""
          />
          <ul>
            <li>
              <Link to="/compare">Compare</Link>
            </li>
            <li>
              <Link to="/">Search</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/compare">
            <ComparePage
              bootcamperData={bootcamperData}
              mentorData={mentorData}
              returnSingleUserData={returnCompareSingleUserData}
              bootcamperComparePanelData={bootcamperComparePanelData}
              mentorComparePanelData={mentorComparePanelData}
            />
          </Route>
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
