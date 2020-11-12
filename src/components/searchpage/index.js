import React from "react";
import SearchInput from "../searchinput";
import UserList from "../userlist";
import UserInfo from "../userinfo";
import UserInfoUpdate from "../userinfoupdate/index";
import "./searchpage.css";

function SearchPage({
  setInput,
  userData,
  returnSingleUserData,
  userInfoData,
  userUpdate,
}) {
  return (
    <div className="sub-page-container">
      <header>
        <h1 className="sub-page-title">People Search</h1>
      </header>
      <section className="page-main-section">
        <article className="search-panel-left">
          <SearchInput setInput={setInput} />
          <UserList
            userData={userData}
            returnSingleUserData={returnSingleUserData}
          />
        </article>
        <article className="search-panel-right">
          <UserInfoUpdate userInfoData={userInfoData} userUpdate={userUpdate} />
        </article>
      </section>
    </div>
  );
}
export default SearchPage;
