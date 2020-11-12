import React, { useState } from 'react'
import './adduserpage.css'
import { useForm } from 'react-hook-form'

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
        setInputField([...inputField, <div key={`inputkey-${interestFieldCount}`}><label>Interest:</label><input type="text" name={`interest${interestFieldCount}`} ref={register} /></div>])
    }

    return (
        <div className="sub-page-container">
            <header>
                <h1 className="sub-page-title">Add User</h1>
            </header>
            <section id="page-main-section-adduser" className="page-main-section">
                <p>Add new bootcampers and mentors here. Enter individual interests into different fields by using the 'add additional interest' button at the bottom of this form.</p>
                <form onSubmit={handleSubmit(submitNewUserData)}>
                    <div>
                    <div><label>First name:</label><input type="text" name="firstname" ref={register} /></div>
                    <div><label>Last name:</label><input type="text" name="surname" ref={register} /></div>
                    <div><label>Address:</label><input type="text" name="address" ref={register} /></div>
                    <div><label>Email:</label><input type="text" name="email" ref={register} /></div>
                    <div><label>Phone:</label><input type="text" name="phone" ref={register} /></div>
                    <div><label>Image url:</label><input type="text" name="image" ref={register} /></div>
                    <div><label>Bootcamper:</label><input type="checkbox" name="isbootcamper" ref={register} /></div>
                    <div><label>Industry:</label><input type="text" name="industry" ref={register} /></div>
                    <div className="form-interest-field">
                        <div ><label>Interest:</label><input type="text" name="interest" ref={register} /></div>
                        {inputField.map((value) => {
                            return value
                        })}
                    </div>
                    </div>
                    <div id="form-buttons">
                        <button type="button" onClick={() => { addInterestField() }}>Add Additonal Interest</button>
                        <input type="submit" />
                        <button type="button" onClick={() => { window.location.reload() }}>Reset Form</button>
                    </div>
                </form>

            </section>
        </div>
    )
}

export default AddUserPage