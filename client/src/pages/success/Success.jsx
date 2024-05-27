import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import './success.css';

const VerificationSuccess = () => {
    const history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
            history.push('/login');
        }, 3000);

        return () => clearTimeout(timer);
    }, [history]);

    return (
        <div className="verification-success">
            <h1>You have successfully verified your account.</h1>
            <h2>Welcome to StoryBook</h2>
            <br/>
            <p>You will be redirected to the login page in a few seconds...</p>
        </div>
    );
};

export default VerificationSuccess;
