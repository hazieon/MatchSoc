import React from "react";
import "./userlistcompare.css";
import {v4 as uuid} from 'uuid'

function UserListCompare({ userData, returnSingleUserData, setUserViewChanged, userViewChanged }) {

function userListFn(value) {
  setUserViewChanged(userViewChanged ? false : true)
  returnSingleUserData(value);
}

  return (
    <ul>
      {userData.map((value) => {
        return (
          <li
            id="user-list-component"
            key={uuid()}
            onClick={() => {
              userListFn(value.id)
            }}
          >
            {value.firstname} {value.surname}
          </li>
        );
      })}
    </ul>
  );
}
export default UserListCompare;
