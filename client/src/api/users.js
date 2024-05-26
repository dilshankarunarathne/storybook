const API_URL = 'http://localhost:5000/api';

export const loginUser = async (username, password) => {
    const response = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Error during login');
    }
};

export const registerUser = async (user) => {
    const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Error during registration');
    }
};
