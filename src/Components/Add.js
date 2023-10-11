import React from 'react'

const Add = () => {
    return (
        <div>

            <h1>Employee Registration Form</h1>

            <input type="text" id="fname" name="fname"></input>
            <label htmlFor='fname'>First Name</label>

            <input type="text" id="lname" name="lname"></input>
            <label htmlFor='lname'>Last Name</label>

            <input type="number" id="password" name="password"></input>
            <label htmlFor='password'>Password</label>



        </div>
    )
}

export default Add