import React, { useState } from 'react'
import './adduserpage.css'
import { useForm } from 'react-hook-form'

function AddUserPage() {
    const { register, handleSubmit, errors } = useForm()

    function submitNewUserData(data) {
        const newData = {...data, interests: [data.interests]}
        console.log(newData)
        
        
    }

    return (
        <div id="search-page">
            <header>
                <h1 id="search-page-logo">Add User</h1>
            </header>
            <section className="main-section">
                <form onSubmit={handleSubmit(submitNewUserData)}>
                    <label>First name: <input type="text" name="firstname" ref={register}/></label>
                    <label>Last name: <input type="text" name="surname" ref={register}/></label>
                    <label>Address: <input type="text" name="address" ref={register}/></label>
                    <label>Email: <input type="text" name="email" ref={register}/></label>
                    <label>Phone: <input type="text" name="phone" ref={register}/></label>
                    <label>Image url: <input type="text" name="image" ref={register}/></label>
                    <label>Bootcamper: <input type="checkbox" name="isbootcamper" ref={register}/></label>
                    <label>Industry: <input type="text" name="industry" ref={register}/></label>
                    <label>Interest: <input type="text" name="interests" ref={register}/></label>
                    <input type="submit" />
                </form>
                <button>Add Interest</button>
            </section>
        </div>
    )
}

export default AddUserPage