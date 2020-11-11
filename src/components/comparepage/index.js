import React, { useState } from "react";
import UserList from "../userlist";
import UserInfo from "../userinfo";
import './comparepage.css'

function ComparePage({
  bootcamperData,
  mentorData,
  returnSingleUserData,
  bootcamperComparePanelData,
  mentorComparePanelData,
}) {
  const [compareListData, setCompareListData] = useState([...mentorData]);
  const [displayUsers, setDisplayUsers] = useState(true);

  function switchData(data) {
    setCompareListData(data);
    displayUsers ? setDisplayUsers(false) : setDisplayUsers(true);
  }

  return (
    <div id="compare-page">
      <header>
        <h1 id="compare-page-logo">People Compare</h1>
      </header>
      <section className="main-section">
        <article className="panel-left">
          <button
            onClick={() => { displayUsers ? switchData(bootcamperData) : switchData(mentorData);}}>{displayUsers ? 'Show Bootcampers' : 'Show Mentors'}</button>
          <UserList
            userData={compareListData}
            returnSingleUserData={returnSingleUserData}
          />
        </article>

        <article className="left-bootcamper-panel">
          <UserInfo userInfoData={bootcamperComparePanelData} />
        </article>

        <article className="right-mentor-panel">
          <UserInfo userInfoData={mentorComparePanelData} />
        </article>
      </section>
    </div>
  );
}

export default ComparePage;
