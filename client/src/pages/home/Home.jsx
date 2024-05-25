import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";
import './home.css'

export default function Home() {
  const { token } = useContext(AuthContext);
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
        {/*<Sidebar/>*/}
        <Feed/>
        {/*<Rightbar/>*/}
      </div>
    </>
  )
}
