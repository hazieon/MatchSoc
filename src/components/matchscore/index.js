import React, { useEffect, useState } from "react";
import "./matchscore.css";

function MatchScore({ bootcamperComparePanelData, mentorComparePanelData, setReloadPageData, userViewChanged }) {

  const [compareUserScore, setCompareUserScore] = useState(0)

  async function saveMatch() {
    await fetch("http://localhost:5000/match", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bootcamperName: `${bootcamperComparePanelData.firstname} ${bootcamperComparePanelData.surname}`,
        bootcamperId: bootcamperComparePanelData.id,
        mentorName: `${mentorComparePanelData.firstname} ${mentorComparePanelData.surname}`,
        mentorId: mentorComparePanelData.id
      }),
    });
    setReloadPageData(true);
  }

  useEffect(() => {
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
        setCompareUserScore(100)
      } else if (matchedInterests.length >= 4) {
        setCompareUserScore(100)
      } else if (industryMatch === true && matchedInterests.length >= 2) {
        setCompareUserScore(100)
      } else {
        if (score * 1.25 >= 100) {
          setCompareUserScore(100)
        } else setCompareUserScore(score * 1.25)
      }
    }
    compareUsers(bootcamperComparePanelData, mentorComparePanelData)
  }, [userViewChanged])

  return (
    <div id="matchscore-container">
    <p>Matching Score</p>
      <p>{compareUserScore}%</p>
      <button onClick={() => saveMatch()}>assign mentor</button>
    </div>
  );
}

export default MatchScore;