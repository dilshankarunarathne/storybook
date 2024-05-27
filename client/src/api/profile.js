const token = localStorage.getItem('token');

const API_URL = 'http://localhost:8000/profile';

export const getCurrentUser = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(getCurrentUser());
            }, 1000);
        });
    }

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

export const editProfile = async (first_name, last_name, dob, bio, profile_picture) => {
    const formData = new FormData();
    if (first_name) formData.append('first_name', first_name);
    if (last_name) formData.append('last_name', last_name);
    if (dob) formData.append('dob', dob);
    if (bio) formData.append('bio', bio);
    if (profile_picture) formData.append('profile_picture', profile_picture);

    const response = await fetch(API_URL, {
        method: 'PUT',
        body: formData,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            const json = await response.json();
            throw new Error(`Error during profile update: ${json.message}`);
        } else {
            const text = await response.text();
            throw new Error(`Error during profile update: ${text}`);
        }
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return await response.json();
    } else {
        return await response.text();
    }
};
