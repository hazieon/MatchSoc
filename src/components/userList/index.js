import React, { useState } from "react";

function UserList({ userData }) {
  function handleClick() {
    //When li clicked, show rest of data for the user.
  }

  return (
    <ul>
      {userData.map((item) => {
        return <li onClick={handleClick}>{item.name}</li>;
      })}
    </ul>
  );
}

export default UserList;
