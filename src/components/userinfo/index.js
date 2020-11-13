import React from "react";
import "./userinfo.css";
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
    matchedwith
  } = userInfoData;

  return (
    <div className="info-container">
      <h2>
        {firstname} {surname}
      </h2>
      <p
        className="info-bootcamper-tag"
        style={
          isbootcamper
            ? { backgroundColor: "#ffe26a" }
            : { backgroundColor: "#ea8696" }
        }
      >
        {isbootcamper ? "bootcamper" : "mentor"}
      </p>
      <section>
        <div className="image-container">
          <img src={image} alt=""></img>
        </div>
        <div>
          <p>
            <span className="info-text">Address:</span> {address}
          </p>
          <p>
            <span className="info-text">Phone:</span> {phone}
          </p>
          <p>
            <span className="info-text">Email:</span> {email}{" "}
            <a href={`mailto:${email}`}>📧</a>
          </p>
          <p>
            <span className="info-text">Industry:</span> {industry}
          </p>
          <div className="info-interests">
            <p className="info-text">Interests:</p>
            <ul>
              {interests.map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            </ul>
          </div>
          <p>
            <span className="info-text">Matched to:</span> {matchedwith}
          </p>
        </div>
      </section>
    </div>
  );
}
export default UserInfo;
