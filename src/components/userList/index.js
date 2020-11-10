import React, { useState } from "react";
import "./UserList.css";

function UserList({ userData }) {
  // function handleClick() {
  //   //When li clicked, show rest of data for the user.
  // }
  console.log(userData);
  return (
    <ul>
      {userData.map((item) => {
        return (
          <li>
            {item.firstname} {item.surname}
          </li>
        );
      })}
    </ul>
  );
}

export default UserList;
// onClick={handleClick}>
