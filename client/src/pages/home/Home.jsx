import React, {useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import AuthContext from '../../context/AuthContext';

import Feed from "../../Components/feed/Feed";
import Topbar from "../../Components/topbar/Topbar";

import './home.css'

export default function Home() {
    const {token} = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        if (!token) {
            history.push('/login');
        }
    }, [token, history]);

    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Feed/>
            </div>
        </>
    )
}
