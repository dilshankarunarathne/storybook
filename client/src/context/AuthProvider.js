import React, { useState, useEffect } from 'react';

import AuthContext from './AuthContext';
import { loginUser } from '../api/users';

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const login = async (username, password) => {
        try {
            const data = await loginUser(username, password);
            const { token } = data;
            setToken(token);
            localStorage.setItem('token', token);
        } catch (error) {
            // TODO: Handle login error
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
