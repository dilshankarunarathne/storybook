import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import {resetPassword} from '../../api/users';

import './reset.css';

function ResetPassword() {
    const [code, setCode] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setCode(params.get('code'));
    }, [location]);

    const validatePassword = async () => {
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMessage = document.getElementById('errorMessage');

        const hasNumber = /\d/;
        const hasLetter = /[a-zA-Z]/;

        if (newPassword !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match.';
            errorMessage.style.display = 'block';
            return false;
        }

        if (newPassword.length < 16 && !(newPassword.length >= 8 && hasNumber.test(newPassword) && hasLetter.test(newPassword))) {
            errorMessage.textContent = 'Password must be at least 16 characters OR at least 8 characters including a number and a letter.';
            errorMessage.style.display = 'block';
            return false;
        }

        errorMessage.style.display = 'none';

        try {
            await resetPassword(newPassword, code);
            alert('Password has been reset successfully!');
            document.getElementById('resetForm').reset();
        } catch (error) {
            alert('Error during password reset');
        }

        return true;
    }

    return (
        <div className="resetPasswordPage">
            <div className="reset-container">
                <h2><strong>Password Reset</strong></h2>

                <form id="resetForm">
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" id="newPassword" name="newPassword" required/>
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required/>
                    <button type="button" onClick={validatePassword}>Set Password</button>
                    <p className="error" id="errorMessage"></p>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
