import React, { useState } from 'react';

const HookForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPswd, setConfPswd] = useState("");
    const [firstNameError, setFirstNameError] = useState ("");
    const [lastNameError, setLastNameError] = useState ("");
    const [emailError, setEmailError] = useState ("");
    const [passwordError, setPasswordError] = useState ("");
    const [confPswdError, setConfPswdError] = useState ("");

    const handleFirstName = (e) => {
        setFirstName (e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First name must be greater than 2 characters")
        }
        else if(e.target.value.length > 2){
            setFirstNameError ("")
        }
    }
    const handleLastName = (e) => {
        setLastName (e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last name must be greater than 2 characters")
        }
        else if(e.target.value.length > 2){
            setLastNameError ("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be greater than 5 characters")
        }
        else if(e.target.value.length > 5){
            setEmailError ("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be greater than 8 characters")
        }
        else if(e.target.value.length > 8){
            setPasswordError("")
        }
    }
    const handleConfPassword = (e) => {
        setConfPswd(e.target.value);
        if(e.target.value !== handlePassword){
            setConfPswdError("Passwords must match")
        }
        else {
            setConfPswdError("")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>First Name </label>
                    <input type = "text" onChange = { handleFirstName }></input>
                    {
                        firstNameError ?
                    <p>{firstNameError}</p> :
                    ""
                    }
                </div>
                <div>
                    <label>Last Name </label>
                    <input type = "text" onChange = { handleLastName }></input>
                    {
                        lastNameError ?
                    <p>{lastNameError}</p>:
                    ""
                    }
                </div>
                <div>
                    <label>Email </label>
                    <input type = "text" onChange = { handleEmail }></input>
                    {
                        emailError ?
                        <p>{emailError}</p>:
                        ""
                    }
                </div>
                <div>
                    <label>Password </label>
                    <input type = "text" onChange = { handlePassword }></input>
                    {
                        passwordError ?
                        <p>{passwordError}</p>:
                        ""
                    }
                </div>            
                <div>
                    <label>Confrim Password </label>
                    <input type = "text" onChange = { handleConfPassword }></input>
                    {
                        confPswdError ?
                        <p>{confPswdError}</p> :
                        ""
                    }
                </div>

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