import React from "react";
import "./userlistdelete.css";
function UserListDelete({ userData, returnSingleUserData, deleteUser }) {
  return (
    <ul>
      {userData.map((value) => {
        return (
          <div>
            <li
              id="user-list-component"
              key={value.id}
              onClick={() => {
                returnSingleUserData(value);
              }}
            >
              {value.firstname} {value.surname}
            </li>
            <button onClick={deleteUser}>X</button>
          </div>
        );
      })}
    </ul>
  );
}
export default UserListDelete;
