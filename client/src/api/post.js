const API_URL = 'http://localhost:8000/post';

export const createPost = async (formData) => {
    const token = localStorage.getItem('token');

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
