import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';

import AuthContext from '../../context/AuthContext';

import "./topbar.css"

export default function Topbar() {
    const {logout} = useContext(AuthContext);
    const history = useHistory();

    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">StoryBook</span>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink" onClick={logout}>Logout</span>
                </div>

                <img
                    src="/assets/4.jpg"
                    alt="" className="topbarImg"
                    onClick={() => history.push('/profile')}
                />
            </div>
        </div>
    )
}
