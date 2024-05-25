import "./rightbar.css"

export default function Rightbar({profile}) {
  const HomeRightbar = () => {
    return(
      <>
      <div className="birthdayContainer">
            <img src="assets/gift.jpg" alt="" className="birthdayImg"/>
            <span className="birthdayText">
              <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
            </span>
          </div>
          <img src="assets/add2.jpg" alt="" className="rightbarAd"/>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
            <li className="rightBarFriends">
              <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src="assets/feed1.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Clara Eloise</span>
            </li>
          </ul>
      </>
    );
  };

const ProfileRightbar = () =>{ 
  return(
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="profileInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York:</span>
        </div>
        <div className="profileInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid:</span>
        </div>
        <div className="profileInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single:</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollwings">
        <div className="rightbarFollowing">
          <img src="assets/5.jpg" alt="" className="rightFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/7.jpg" alt="" className="rightFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/9.jpg" alt="" className="rightFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/10.jpg" alt="" className="rightFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/CurentProfile.jpeg" alt="" className="rightFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/feed11.jpg" alt="" className="rightFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/8.jpg" alt="" className="rightFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/feed6.jpg" alt="" className="rightFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/story4.jpg" alt="" className="rightFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/feed5.jpeg" alt="" className="rightFollowingImg"/>
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
      </>
  );
}

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}
