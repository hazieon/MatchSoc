import React from "react";
import SearchInput from "../searchinput";
import UserList from "../userlist";
import UserInfo from "../userinfo";
import UserListDelete from "../userlistdelete/userlistdelete";
import "./searchpage.css";

function SearchPage({
  setInput,
  userData,
  returnSingleUserData,
  userInfoData,
  deleteUser,
}) {
  return (
    <div className="sub-page-container">
      <header>
        <h1 className="sub-page-title">People Search</h1>
      </header>
      <section className="page-main-section">
        <article className="search-panel-left">
          <SearchInput setInput={setInput} />
          <UserListDelete
            userData={userData}
            returnSingleUserData={returnSingleUserData}
            deleteUser={deleteUser}
          />
        </article>
        <article className="search-panel-right">
          <UserInfo userInfoData={userInfoData} />
        </article>
      </section>
    </div>
  );
}
export default SearchPage;
