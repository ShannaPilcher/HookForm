import React, { useState } from 'react';

const HookForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPswd, setConfPswd] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>First Name </label>
                    <input type = "text" onChange = { (e) => setFirstName(e.target.value) }></input>
                </div>
                <div>
                    <label>Last Name </label>
                    <input type = "text" onChange = { (e) => setLastName(e.target.value) }></input>
                </div>
                <div>
                    <label>Email </label>
                    <input type = "text" onChange = { (e) => setEmail(e.target.value) }></input>
                </div>
                <div>
                    <label>Password </label>
                    <input type = "text" onChange = { (e) => setPassword(e.target.value) }></input>
                </div>            
                <div>
                    <label>Confrim Password </label>
                    <input type = "text" onChange = { (e) => setConfPswd(e.target.value) }></input>
                </div>
                <button type ="submit">Submit</button>
                
            </form>
            <h3>Your Form Data</h3>
            <div>
                <p>First Name { firstName } </p>
                <p>Last Name { lastName } </p>
                <p>Email { email } </p>
                <p>Password { password } </p>
                <p>Confirm Password { confPswd } </p>
            </div>
        </div>

    )
}

export default HookForm;