import React, { useState, useEffect } from "react";
import SearchInput from "../searchInput";
import UserInfo from "../userInfo";
import UserList from "../userList";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch("https://localhost:5000"); TODO:
      let data = await res.json();
      setUserData(data);
    }
    getData();
  }, []);

  
  
  return (
    <div>
      <SearchInput />
      <UserInfo />
      <UserList data={userData}/>
    </div>
  );
}

export default App;
