import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {registerUser} from '../../api/users';

import "./register.css"

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = {username, password, email, first_name: firstName, last_name: lastName, dob};
            const response = await registerUser(user);
            console.log(response);
            history.push('/landing');
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogin = () => {
        history.push('/login');
    }

    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">StoryBook</h3>
                    <span className="registerDesc">
                    Connect with friends and 
                    the world around you on StoryBook.
                </span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            className="registerInput"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="registerInput"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="registerInput"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="registerInput"
                        />
                        <div className="nameContainer">
                            <div className="fnameLeft">
                                <input
                                    placeholder="First name"
                                    className="registerInput"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="lnameRight">
                                <input
                                    placeholder="Last name"
                                    className="registerInput"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="Date of Birth"
                            onFocus={(e) => e.target.type = 'date'}
                            className="registerInput"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                        <button className="registerButton">Sign Up</button>
                        <br/>
                        Already have an account ?
                        <button className="logRegisterButton" onClick={handleLogin}>Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
