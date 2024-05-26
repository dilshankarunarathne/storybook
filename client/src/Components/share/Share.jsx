import {PermMedia} from "@mui/icons-material"

import "./share.css";

export default function Share() {
  return (
    <div className="share">
        <div className="shareContainer">
            <div className="shareWrapper">
                <div className="shareTop">
                  <img className="shareProfileImg" src="/assets/4.jpg" alt=""/> 
                    <input placeholder="What's in your mind Daisy?" type="text" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    </div>
  )
}
