import React, { useState } from "react";
import SearchInput from "../searchInput";
import UserList from "../userList";
import UserInfo from "../userInfo";
function SearchPage({ captureInput, specificData, userData }) {
  return (
    <div className="search-page">
      <header>
        <h1>Site Name</h1>
      </header>
      <section>
        <article className="panel-left">
          <SearchInput captureInput={captureInput} />
          <UserList userData={userData} />
        </article>
        <article className="panel-right">
          <UserInfo specificData={specificData} userData={userData} />
        </article>
      </section>
    </div>
  );
}

export default SearchPage;
