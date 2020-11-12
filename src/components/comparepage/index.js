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
    <div className="sub-page-container">
      <header>
        <h1 className="sub-page-title">Compare</h1>
      </header>
      <section className="page-main-section">
        <div className="compare-panel-left">
          <button
            onClick={() => { displayUsers ? switchData(bootcamperData) : switchData(mentorData);}}>{displayUsers ? 'Show Bootcampers' : 'Show Mentors'}</button>
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
      </section>
    </div>
  );
}

export default ComparePage;
