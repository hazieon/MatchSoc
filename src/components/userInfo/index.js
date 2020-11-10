import React, { useState } from "react";
import "./UserInfo.css";

function UserInfo({ userData }) {
  console.log(userData.image);
  return (
    <div>
      <h1>
        {userData[0].firstname}
        {userData[0].surname}
      </h1>
      <p>{userData[0].address}</p>
      <p>{userData[0].email}</p>
      <p>{userData[0].industry}</p>
      <p>{userData[0].phone}</p>

      <img src={userData[0].image} />
    </div>
  );
}

export default UserInfo;
//////////
