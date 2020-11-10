import React, { useState, useEffect } from "react";
import SearchInput from "../searchInput";
import UserInfo from "../userInfo";
import UserList from "../userList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch("https://localhost:5000");
      let data = await res.json();
      setUserData(data);
    }
    getData();
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users">Home</Link>
            </li>
            {/* <li>
  <Link to"/">Search?</Link>
</li> */}
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <UserList data={userData} />
          </Route>
          <Route path="/search">
            <SearchInput />
          </Route>
          <Route>
            <UserInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
