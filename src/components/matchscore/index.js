import React, { useState } from "react";
import "./matchscore.css";

function MatchScore({
  compareUsers,
  bootcamperComparePanelData,
  mentorComparePanelData,
  setReloadPageData,
}) {
  //create state for chosen bootcamper & mentor - by names or by id
  //   const [match, setMatch] = useState(); //bootcamper match id
  //   //mentor match id

  //-> submitMatch(){ fetch doing PATCH with the two IDs... where ID = matches users id, insert name into 'matched with' column }
  //   'INSERT INTO users (matched with) VALUES $1 $2 WHERE id = ???'

  //create array/object with these states/values in and send that to database with async function

  async function saveMatch() {
    const res = await fetch("http://localhost:5000/match", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bootcamper: bootcamperComparePanelData.id.toString(),
        mentor: mentorComparePanelData.id.toString(),
      }),
    });
    window.location.href = "http://localhost:3000/";
    setReloadPageData(true);
    return res;
  }

  return (
    <div>
      <p content>
        {bootcamperComparePanelData
          ? compareUsers(bootcamperComparePanelData, mentorComparePanelData)
          : (window.location.href = "http://localhost:3000/")}
      </p>
      <p>{bootcamperComparePanelData.matchedwith}</p>
      <button onClick={() => saveMatch()}>save match</button>
    </div>
  );
}

export default MatchScore;

// async function submitNewUserData(data) {
//     const response = await fetch('http://localhost:5000/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(cleanUserData(data))
//     })
//     setReloadPageData(true)
//     reset()
//     return response
// }

// function addInterestField() {
//     const interestFieldCount = inputField.length
//     setInputField([...inputField, <div key={`inputkey-${interestFieldCount}`}><label>Interest:</label><input type="text" name={`interest${interestFieldCount}`} ref={register} /></div>])
// }
