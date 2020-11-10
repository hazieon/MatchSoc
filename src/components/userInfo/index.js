import React, { useState } from "react";
import "./UserInfo.css";

function UserInfo({ userData }) {
  console.log(userData);
  return (
    <div>
      <h1>
        {userData.firstname}
        {userData.surname}
      </h1>
      <p>{userData.address}</p>
      <p>{userData.email}</p>
      <p>{userData.industry}</p>
      <p>{userData.phone}</p>

      <img src={userData.image} />
    </div>
  );
}

export default UserInfo;
//////////
