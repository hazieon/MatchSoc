import React from "react";
import "./userlist.css";
function UserList({ userData, returnSingleUserData }) {
  console.log(userData);
  return (
    <ul>
      {userData.map((value) => {
        return (
          <li
            key={value.id}
            onClick={() => {
              returnSingleUserData(value);
            }}
          >
            {value.firstname} {value.surname}
          </li>
        );
      })}
    </ul>
  );
}
export default UserList;
