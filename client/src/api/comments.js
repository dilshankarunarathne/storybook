const token = localStorage.getItem('token');

const API_URL = 'http://localhost:8000/comment';

export const getComments = async (postId) => {

    const response = await fetch(`${API_URL}?post=${postId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const message = await response.text();
        throw new Error(`Error during comments fetching: ${message}`);
    }

    const fetchedComments = await response.json();
    return fetchedComments;
};

export const addComment = async (postId, commentText) => {
    const formData = new FormData();
    formData.append('post', postId);
    formData.append('text', commentText);

    const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const message = await response.text();
        throw new Error(`Error during comment submission: ${message}`);
    }

    return await response.json();
};
