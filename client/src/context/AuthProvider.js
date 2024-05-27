import React, {useEffect, useState} from 'react';

import AuthContext from './AuthContext';
import {loginUser} from '../api/users';

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        setLoading(true);
        try {
            const data = await loginUser(username, password);
            const {token} = data;
            setToken(token);
            localStorage.setItem('token', token);
        } catch (error) {
            // TODO: Handle login error
        }
        setLoading(false);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{token, login, logout, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
