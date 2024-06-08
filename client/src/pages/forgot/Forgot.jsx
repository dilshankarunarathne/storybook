import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {requestPasswordReset} from "../../api/users";

import './forgot.css';

export default function ForgotPassword() {
    const [username, setUsername] = useState('');

    const history = useHistory();

    const handleRequestReset = async (e) => {
        e.preventDefault();
        try {
            await requestPasswordReset(username);
        } catch (error) {
            console.log(error.message);
            // alert('Error during password reset request');

            // TODO: show error message
        }

        history.push('/landing');
    };

    const handleContinueToLogin = () => {
        history.push('/login');
    }

    return (
        <div className="forgotPassword">
            <h2>Forgot Password</h2>
            <p>Enter your username to request a password reset link</p>
            <form onSubmit={handleRequestReset}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="forgotPasswordInput"
                />
                <button type="submit" className="forgotPasswordButton">Request Password Reset</button>
            </form>
            <span className="forgotPasswordLoginLink" onClick={handleContinueToLogin}>Or continue to login</span>
        </div>
    );
}
