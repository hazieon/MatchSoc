import React, { useState } from 'react'
import './adduserpage.css'
import { useForm } from 'react-hook-form'
import InterestInput from '../interestinput'

function AddUserPage({ setReloadPageData }) {
    const [inputField, setInputField] = useState([])
    const { register, handleSubmit, errors, reset } = useForm()

    function cleanUserData(data) {
        let userDataAsArray = Object.entries(data)
        let interest = []

        for (let i = 0; i < userDataAsArray.length; i++) {
            if (userDataAsArray[i][0].slice(0, 8) === 'interest') {
                interest.push(userDataAsArray[i][1])
            }
        }

        const { firstname, surname, address, email, phone, image, isbootcamper, industry } = data
        const userData = {
            firstname: firstname,
            surname: surname,
            address: address,
            email: email,
            phone: phone,
            image: image,
            isbootcamper: isbootcamper,
            industry: industry,
            interests: interest
        }
        return userData
    }

    async function submitNewUserData(data) {
        const response = await fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cleanUserData(data))
        })
        setReloadPageData(true)
        reset()
        return response
    }

    function addInterestField() {
        const interestFieldCount = inputField.length
        setInputField([...inputField, <label key={`inputkey-${interestFieldCount}`}>Interest: <input type="text" name={`interest${interestFieldCount}`} ref={register} /></label>])
    }

    return (
        <div id="search-page">
            <header>
                <h1 id="search-page-logo">Add User</h1>
            </header>
            <section className="main-section">
                <form onSubmit={handleSubmit(submitNewUserData)}>
                    <label>First name: <input type="text" name="firstname" ref={register} /></label>
                    <label>Last name: <input type="text" name="surname" ref={register} /></label>
                    <label>Address: <input type="text" name="address" ref={register} /></label>
                    <label>Email: <input type="text" name="email" ref={register} /></label>
                    <label>Phone: <input type="text" name="phone" ref={register} /></label>
                    <label>Image url: <input type="text" name="image" ref={register} /></label>
                    <label>Bootcamper: <input type="checkbox" name="isbootcamper" ref={register} /></label>
                    <label>Industry: <input type="text" name="industry" ref={register} /></label>
                    <label>Interest: <input type="text" name="interest" ref={register} /></label>
                    {inputField.map((value) => {
                        return value
                    })}
                    <input type="submit" />
                </form>
                <button onClick={() => { addInterestField() }}>Add Interest</button>
            </section>
        </div>
    )
}

export default AddUserPage