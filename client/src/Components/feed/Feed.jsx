import {useEffect, useState} from 'react';

import Post from "../post/Post"
import Share from "../share/Share"

import "./feed.css"

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8000/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.text();
                setPosts(JSON.parse(data));
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper middle">
                <Share/>
                <br/>
                {posts.map(post => <Post key={post.post_id} post={post}/>)}
            </div>
        </div>
    )
}
