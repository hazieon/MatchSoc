import React from "react";
import "./UserInfo.css";
function UserInfo({ userInfoData }) {
  const {
    firstname,
    surname,
    address,
    phone,
    email,
    image,
    industry,
    isbootcamper,
    interests = [],
  } = userInfoData;
  return (
    <div>
      <h3>
        {firstname} {surname}
      </h3>
      <div>
        <p>address: {address}</p>
        <p>phone: {phone}</p>
        <p>email: {email}</p>
        <p>industry: {industry}</p>
        <p>role: {isbootcamper ? "bootcamper" : "mentor"}</p>
        <ul>
          interests:
          {interests.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
      <img src={image} alt=""></img>
    </div>
  );
}
export default UserInfo;
