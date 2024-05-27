const token = localStorage.getItem('token');

const API_URL = 'http://localhost:8000/post';

export const createPost = async (formData) => {
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
            throw new Error(`Error during post creation: ${json.message}`);
        } else {
            const text = await response.text();
            throw new Error(`Error during post creation: ${text}`);
        }
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return await response.json();
    } else {
        return await response.text();
    }
};

export const editPost = async (postId, newPostText) => {
    const formData = new FormData();
    formData.append('id', postId);
    formData.append('text', newPostText);

    const response = await fetch(API_URL, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    });

    if (!response.ok) {
        const message = await response.text();
        throw new Error(`Error during post editing: ${message}`);
    }

    return await response.json();
};

export const deletePost = async (postId) => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('id', postId);

    const response = await fetch(API_URL, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    });

    if (!response.ok) {
        const message = await response.text();
        throw new Error(`Error during post deletion: ${message}`);
    }

    return await response.json();
};
