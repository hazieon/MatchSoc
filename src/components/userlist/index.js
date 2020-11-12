import React from "react";
import "./userlist.css";
function UserList({ userData, returnSingleUserData }) {
  return (
    <ul>
      {userData.map((value) => {
        return (
          <li
            id="user-list-component"
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
