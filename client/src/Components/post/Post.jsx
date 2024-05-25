import {MoreVert} from "@mui/icons-material"
import AuthContext from "../../context/AuthContext";
import {useContext} from "react";

import "./post.css"

export default function Post() {
    const { token, login, logout } = useContext(AuthContext);

    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/feed1.jpg" alt=""/>
                    <span className="postUsername">Daisy Audrey</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post:) </span>
                <img className="postImg" src="assets/post1.jpg" alt=""/>
            </div>

            {/*TODO: change the style of buttons */}
            <div className="postBottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src="assets/like1.jpg" alt=""/>
                <img className="likeIcon" src="assets/hrt.jpg" alt=""/>
                <span className="postlikeCounter">32 People like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">8 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
