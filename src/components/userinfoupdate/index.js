import React from "react";
import "./userinfoupdate.css";
function UserInfoUpdate({ userInfoData, userUpdate }) {
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

  const { id, text, heading } = userUpdate;

  return (
    <div className="info-container">
      <div>
        <h2>
          {firstname} {surname}
        </h2>
        <input
          value={firstname}
          onChange={(e) => {
            userUpdate(id, e.target.value, firstname);
          }}
        />
      </div>
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
          <div>
            <p>
              <span className="info-text">Address:</span> {address}
              <input value={address} />
            </p>
          </div>
          <div>
            <p>
              <span className="info-text">Phone:</span> {phone}
              <input value={phone} />
            </p>
          </div>
          <div>
            <p>
              <span className="info-text">Email:</span> {email}{" "}
              <a href={`mailto:${email}`}>📧</a>
              <input value={email} />
            </p>
          </div>
          <div>
            <p>
              <span className="info-text">Industry:</span> {industry}
            </p>
            <input value={industry} />
          </div>
          <div className="info-interests">
            <p className="info-text">Interests:</p>
            <ul>
              {interests.map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            </ul>
            <input value={interests} />
          </div>
        </div>
      </section>
    </div>
  );
}
export default UserInfoUpdate;
