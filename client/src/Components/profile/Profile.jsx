import "./profile.css"
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
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
        <Rightbar profile/>
        </div>
    </div>
    </div>
    
    </>
  )
}
