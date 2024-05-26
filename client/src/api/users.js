const API_URL = 'http://localhost:8000/auth';

export const loginUser = async (username, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Error during login');
    }
};

export const registerUser = async (user) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Error during registration');
    }
};
