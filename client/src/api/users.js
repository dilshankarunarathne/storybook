const API_URL = 'http://localhost:8000/auth';

export const loginUser = async (username, password) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Error during login');
    }
};

export const registerUser = async (user) => {
    const formData = new FormData();

    for (const key in user) {
        formData.append(key, user[key]);
    }

    const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        return await response.text();
    } else {
        throw new Error('Error during registration');
    }
};

export const resetPassword = async (password, code) => {
    const formData = new FormData();
    formData.append('password', password);
    formData.append('code', code);

    const response = await fetch(`${API_URL}/reset`, {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Error during password reset');
    }
};

export const requestPasswordReset = async (username) => {
    const formData = new FormData();
    formData.append('username', username);

    const response = await fetch(`${API_URL}/forgot`, {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Error during password reset request');
    }
};
