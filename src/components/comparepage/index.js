import React, { useState } from "react";
import UserList from "../userlist";
import UserInfo from "../userinfo";
import MatchScore from "../matchscore";
import "./comparepage.css";

function ComparePage({
  bootcamperData,
  mentorData,
  returnSingleUserData,
  bootcamperComparePanelData,
  mentorComparePanelData,
  setReloadPageData,
}) {
  const [compareListData, setCompareListData] = useState([...mentorData]);
  const [displayUsers, setDisplayUsers] = useState(true);

  function switchData(data) {
    setCompareListData(data);
    displayUsers ? setDisplayUsers(false) : setDisplayUsers(true);
  }

  function compareUsers(bootcamper, mentor) {
    let score = 0;
    let industryMatch = false;
    let matchedInterests = [];

    if (bootcamper.industry === mentor.industry) {
      industryMatch = true;
      score += 40;
    }

    bootcamper.interests.map((bootcamperInterest) => {
      mentor.interests.map((mentorInterest) => {
        if (bootcamperInterest === mentorInterest) {
          score += 20;
          matchedInterests.push(bootcamperInterest);
        }
      });
    });

    if (
      matchedInterests.length === bootcamper.interests.length &&
      matchedInterests.length === mentor.interests.length
    ) {
      score = 100;
      return score;
    } else if (matchedInterests.length >= 4) {
      score = 100;
      return score;
    } else if (industryMatch === true && matchedInterests.length >= 2) {
      score = 100;
      return score;
    } else {
      if (score * 1.25 >= 100) {
        return 100;
      } else return score * 1.25;
    }
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
              displayUsers
                ? switchData(bootcamperData)
                : switchData(mentorData);
            }}
          >
            {displayUsers ? "Show Bootcampers" : "Show Mentors"}
          </button>
          <UserList
            userData={compareListData}
            returnSingleUserData={returnSingleUserData}
          />
        </div>

        <article className="compare-panel-right">
          <UserInfo userInfoData={bootcamperComparePanelData} />
          <hr />
          <UserInfo userInfoData={mentorComparePanelData} />
        </article>
        <article>
          <MatchScore
            compareUsers={compareUsers}
            bootcamperComparePanelData={bootcamperComparePanelData}
            mentorComparePanelData={mentorComparePanelData}
            setReloadPageData={setReloadPageData}
          />
        </article>
      </section>
    </div>
  );
}

export default ComparePage;
