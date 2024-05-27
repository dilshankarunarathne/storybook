const token = localStorage.getItem('token');

const API_URL = 'http://localhost:8000/profile';

export const getCurrentUser = async () => {
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            const json = await response.json();
            throw new Error(`Error during profile fetching: ${json.message}`);
        } else {
            const text = await response.text();
            throw new Error(`Error during profile fetching: ${text}`);
        }
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return await response.json();
    } else {
        return await response.text();
    }
};

export const getProfile = async (username) => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('username', username);

    const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            const json = await response.json();
            throw new Error(`Error during profile fetching: ${json.message}`);
        } else {
            const text = await response.text();
            throw new Error(`Error during profile fetching: ${text}`);
        }
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return await response.json();
    } else {
        return await response.text();
    }
};


