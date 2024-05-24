import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const NavBar = () => {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className='logo'>facebook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBox">
                <SearchIcon className='searchIcon'/>
            </div>
        </div>
        <div className="navBarRight"></div>
       
    </div>
    
  )
}
