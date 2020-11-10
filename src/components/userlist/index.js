import React from "react";
import "./userlist.css";
function UserList({ userData, returnSingleUserData }) {
  return (
    <ul>
      {userData.map((value, index) => {
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
