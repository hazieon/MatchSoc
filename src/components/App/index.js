import React, { useState, useEffect } from "react";
import SearchInput from "../searchInput";
import SearchPage from "../SearchPage";
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
      <div id="page">
        <nav>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            {/* <li>
  <Link to"/"></Link>
</li> */}
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <SearchPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//<UserList data={userData} />
{
  /* <Route path="/search">
<SearchInput />
</Route>
<Route>
<UserInfo />
</Route> */
}
