import React from 'react'
import './interestinput.css'

function InterestInput({ key, name, ref }) {
    return <label>Interest: <input key={key} type="text" name={`interest${name}`} ref={ref} /></label>
}

export default InterestInput