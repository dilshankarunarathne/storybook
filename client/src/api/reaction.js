const token = localStorage.getItem('token');

const API_URL = 'http://localhost:8000/react';

export const addReaction = async (postId) => {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('post', postId);

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    });

    if (!response.ok) {
        const message = await response.text();
        throw new Error(`Error during reaction addition: ${message}`);
    }

    return await response.json();
};
