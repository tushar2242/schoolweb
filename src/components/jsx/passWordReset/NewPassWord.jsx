import axios from 'axios';
import React, { useState } from 'react';

import logo from '../../images/logo3.png';
import Notification from '../notification/Notification';

const NewPassWord = () => {
    const [proMessage, setProMessage] = useState('');
    const [proColor, setProColor] = useState('alert alert-error')
    const [newPass, setNewPass] = useState('');
    const [confPass, setConfPass] = useState('');

    const handleNewPassSubmit = (event) => {
        setProColor('');
        setProMessage('');
        event.preventDefault();
        // Password validation
        if (newPass.length < 8) {
            setProMessage("Password should be at least 8 characters long.");
            setProColor('alert alert-error');
            return;
        }
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(newPass)) {
            setProMessage("Password should contain at least one lowercase letter, one uppercase letter, one number and one special character.");
            setProColor('alert alert-error')
            return;
        }
        // Confirm password validation
        if (newPass !== confPass) {
            setProMessage("Password and confirm password do not match.");
            setProColor('alert alert-error')
            return;
        }
        // Form submission
        // ...
    }

    const handlePasswordChange = (event) => {
        setNewPass(event.target.value);
    }
    const handleConfirmPasswordChange = (event) => {
        setConfPass(event.target.value);
    }


    return (
        <>
            {
                proMessage !== '' &&
                <Notification
                    msg={proMessage}
                    color={proColor}
                    className='mt-4'
                />
            }
            <form onSubmit={handleNewPassSubmit} className='newPassForm'>
                <div className="forget-row">
                    <img src={logo} alt="logo" />
                    <h1>Create New Password </h1>
                    <h6 className="information-text">Enter your registered email to get your reset password link.</h6>
                    <div className="form-group">
                        <input type="password" name="user_email" value={newPass} onChange={handlePasswordChange}
                            required />
                        <p><label htmlFor="username">Create new Password</label></p>
                        <input type="password" name="user_password" value={confPass} onChange={handleConfirmPasswordChange}
                            required />
                        <p><label htmlFor="username">Confirm Password</label></p>
                        <button type='submit'>Reset Password</button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default NewPassWord;