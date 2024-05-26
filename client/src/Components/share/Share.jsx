import React, {useEffect, useState} from 'react';
import {PermMedia} from "@mui/icons-material";

import {createPost} from '../../api/post';
import {getCurrentUser} from '../../api/profile';

import "./share.css";

export default function Share() {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const username = localStorage.getItem('username');
                const profile = await getCurrentUser();
                setFirstName(profile.first_name);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('text', text);
        if (image) {
            formData.append('image', image);
        }
        try {
            await createPost(formData);
            setText('');
            setImage(null);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="share" onSubmit={handleSubmit}>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/4.jpg" alt=""/>
                    <input
                        placeholder={`What's in your mind ${firstName}?`}
                        type="text"
                        className="shareInput"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <label htmlFor="fileInput" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            style={{display: 'none'}} id="fileInput"
                        />
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </form>
    )
}
