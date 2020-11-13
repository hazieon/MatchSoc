import React from "react";
import "./userlistdelete.css";
import {v4 as uuid } from 'uuid'

function UserListDelete({ userData, returnSingleUserData, deleteUser }) {
  return (
    <ul>
      {userData.map((value) => {
        return (
          <div id="user-list-delete-component-container" key={uuid()}>
            <li
              id="user-list-delete-component"
              
              onClick={() => {
                returnSingleUserData(value.id);
              }}
            >
              {value.firstname} {value.surname}
            </li>
            <button
              onClick={() => {
                deleteUser(value.id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </ul>
  );
}
export default UserListDelete;
