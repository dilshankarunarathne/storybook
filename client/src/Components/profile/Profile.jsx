import Feed from "../../Components/feed/Feed";
import Topbar from "../../Components/topbar/Topbar";

import "./profile.css"

export default function Profile() {
  return (
    <>
        <Topbar/>
        <div className="profile">
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className="profileCoverImg" src="assets/cover1.jpg" alt=""/>
                <img className="profileUserImg" src="assets/4.jpg" alt=""/>
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Daisy Audrey</h4>
                    <span className="profileInfoDesc">Hello my friends!</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Feed/>
            </div>
        </div>
        </div>
    </>
  )
}
