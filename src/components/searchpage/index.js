import React from "react";
import SearchInput from "../searchinput";
import UserList from "../userlist";
import UserInfo from "../userinfo";
import "./searchpage.css";

function SearchPage({
  setInput,
  userData,
  returnSingleUserData,
  userInfoData,
}) {
  
  return (
    <div id="search-page">
      <header>
        <h1 id="search-page-logo">People Search</h1>
      </header>
      <section className="main-section">
        <article className="panel-left">
          <SearchInput setInput={setInput} />
          <UserList
            userData={userData}
            returnSingleUserData={returnSingleUserData}
          />
        </article>
        <article className="panel-right">
          <UserInfo userInfoData={userInfoData} />
        </article>
      </section>
    </div>
  );
}
export default SearchPage;
