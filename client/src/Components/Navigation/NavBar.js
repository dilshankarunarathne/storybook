import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddHomeRoundedIcon from '@mui/icons-material/AddHomeRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const NavBar = () => {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className='logo'>facebook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBox">
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search For your Friend' className='searchInput'/>
                <div className="navBarIcons">
                <div className="navBarIcon">
                    <AddHomeRoundedIcon className='icon1'/>
                </div>
                <div className="navBarIcon">
                    <OndemandVideoRoundedIcon className='icon2'/>
                </div>
                <div className="navBarIcon">
                    <StorefrontRoundedIcon className='icon3'/>
                </div>
                <div className="navBarIcon">
                    <GroupAddRoundedIcon className='icon4'/>
                </div>
                <div className="navBarIcon">
                    <VideogameAssetRoundedIcon className='icon5'/>
                </div>

            </div>
            </div>
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <span className='navBarLink'>HomePge</span>
                <span className='navBarLink'>Profile</span>
                <div className="navBarIcon">
                    <MenuOpenRoundedIcon className='icon6'/>
                </div>
                <div className="navBarIcon">
                    <MessageIcon className='icon7'/>
                    <span className='iconTag'>3</span>
                </div>
                <div className="navBarIcon">
                    <CircleNotificationsIcon className='icon8'/>
                    <span className='iconTag'>7</span>
                </div>
                <div className="navBarIcon">
                    <PersonAddIcon className='icon9'/>
                    <span className='iconTag'>5</span>
                </div>
            </div>
            
        </div>
       
    </div>
    
  )
}
