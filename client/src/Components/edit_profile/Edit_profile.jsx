import React from 'react'
import "./edit_profile.css"

const Edit_profile = () => {
  return (
    <div className="edit_profile">
        <div className="edit_profileRight">
            <div className="edit_profileRightTop">
                <div className="edit_profileCover">
                <img className="edit_profileCoverImg" src="assets/cover1.jpg" alt=""/>
                <img className="edit_profileUserImg" src="assets/4.jpg" alt=""/>
                </div>
                <div className="edit_profileInfo">
                    <h4 className="edit_profileInfoName" placeholder="Edit name" ></h4>
                    <span className="edit_profileInfoDesc">Hello my friends!</span>
                </div>
            </div>
            <div className="edit_profileRightBottom">
            <Feed/>
            </div>
        </div>
        </div>
  )
}

export default Edit_profile