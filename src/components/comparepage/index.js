import React, { useEffect, useState } from "react";
import UserListCompare from "../userlistcompare";
import UserInfo from "../userinfo";
import MatchScore from "../matchscore";
import "./comparepage.css";

function ComparePage({
  userData,
  returnSingleUserData,
  bootcamperComparePanelData,
  mentorComparePanelData,
  setReloadPageData,
}) {
  const [compareListData, setCompareListData] = useState([...userData.filter((value)=> value.isbootcamper === false)]);
  const [displayUsers, setDisplayUsers] = useState(true);
  const [userViewChanged, setUserViewChanged] = useState(true)

  function switchData(data) {
    setCompareListData(data);
    displayUsers ? setDisplayUsers(false) : setDisplayUsers(true);
  }

  return (
    <div className="sub-page-container">
      <header>
        <h1 className="sub-page-title">Compare</h1>
      </header>
      <section className="page-main-section">
        <div className="compare-panel-left">
          <button
            onClick={() => {
              displayUsers ? switchData(userData.filter((value)=> value.isbootcamper === true)) : switchData(userData.filter((value)=> value.isbootcamper === false));
            }}
          >
            {displayUsers ? "Show Bootcampers" : "Show Mentors"}
          </button>
          <UserListCompare
            userData={compareListData}
            returnSingleUserData={returnSingleUserData}
            setUserViewChanged={setUserViewChanged}
            userViewChanged={userViewChanged}
          />
        </div>

        <article className="compare-panel-right">
          <UserInfo userInfoData={bootcamperComparePanelData} />
          <hr id="hra"/>
          <article id="matchscore-container">
          <MatchScore
            bootcamperComparePanelData={bootcamperComparePanelData}
            mentorComparePanelData={mentorComparePanelData}
            setReloadPageData={setReloadPageData}
            userViewChanged={userViewChanged}
          />
        </article>
        <hr id="hrb"/>
          <UserInfo userInfoData={mentorComparePanelData} />
        </article>
        
      </section>
    </div>
  );
}

export default ComparePage;
