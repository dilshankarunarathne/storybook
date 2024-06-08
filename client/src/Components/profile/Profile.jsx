import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {getCurrentUser} from '../../api/profile';

import Topbar from "../../Components/topbar/Topbar";

import "./profile.css"

export default function Profile() {
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getCurrentUser();
            setUser(userData);
        };

        fetchUser();
    }, []);

    const handleEditProfile = () => {
        history.push('/edit');
    }

    const byteArray = user?.profile_picture ? new Uint8Array(user.profile_picture.data) : null;
    let binary = '';
    if (byteArray) {
        const len = byteArray.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(byteArray[i]);
        }
    }
    const profilePicture = byteArray ? `data:image/jpeg;base64,${btoa(binary)}` : '';

    return (
        <>
            <Topbar/>
            <div className="profile">
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/cover1.jpg" alt=""/>
                            <img className="profileUserImg" src={profilePicture} alt=""/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user?.first_name} {user?.last_name}</h4>
                            <span className="profileInfoDesc">{user?.bio}</span>
                        </div>
                    </div>
                    <br/>
                    <div className="profileRightBottom">
                        <div className="profileDetails">
                            <p><strong>Username:</strong> {user?.username}</p>
                            <p><strong>Email:</strong> {user?.email}</p>
                            <p><strong>Date of Birth:</strong> {user?.dob}</p>
                        </div>
                        <button className="editProfileButton" onClick={handleEditProfile}>Edit Profile</button>
                    </div>
                </div>
            </div>
        </>
    )
}
