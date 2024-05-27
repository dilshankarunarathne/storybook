import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import {getCurrentUser} from '../../api/profile';

import "./topbar.css"

export default function Topbar() {
    const {logout} = useContext(AuthContext);
    const {loading} = useContext(AuthContext);

    const history = useHistory();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!loading) {
            const fetchUser = async () => {
                try {
                    const userData = await getCurrentUser();
                    setUser(userData);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchUser();
        }
    }, [loading]);

    const navigateHome = () => {
        history.push('/');
    };

    const byteArray = user?.profile_picture ? new Uint8Array(user.profile_picture.data) : null;
    let binary = '';
    if (byteArray) {
        const len = byteArray.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(byteArray[i]);
        }
    }
    const profilePicture = byteArray ? `data:image/jpeg;base64,${btoa(binary)}` : '/assets/avatar_default.jpg';

    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">StoryBook</span>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink" onClick={navigateHome}>Home</span>
                    <span className="topbarLink" onClick={logout}>Logout</span>
                </div>

                <img
                    src={profilePicture}
                    alt="" className="topbarImg"
                    onClick={() => history.push('/profile')}
                />
            </div>
        </div>
    )
}
