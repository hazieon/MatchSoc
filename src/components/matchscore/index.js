import React from 'react'
import './matchscore.css'

function MatchScore({ compareUsers, bootcamperComparePanelData, mentorComparePanelData }) {
    console.log(bootcamperComparePanelData)
    return (
        <div>
            <p content>{bootcamperComparePanelData ? compareUsers(bootcamperComparePanelData, mentorComparePanelData) : window.location.href='http://localhost:3000/'}</p>
            <p>{bootcamperComparePanelData.matchedwith}</p>
        </div>
    )
}

export default MatchScore