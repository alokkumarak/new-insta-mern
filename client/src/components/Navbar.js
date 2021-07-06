import { AppBar, Avatar } from '@material-ui/core'
import React from 'react'
import '../css/navbar.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

function Navbar() {
    const logo = "https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
    const message_icon = 'https://www.pinclipart.com/picdir/big/392-3928236_robina-campus-facebook-messenger-icon-white-clipart.png'
    const profile = "https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg";


    return (
        <AppBar >
            <div className="nav__container">
                <div className="nav__left">
                    <img src={logo} alt="instagram logo" />
                </div>
                <div className="nav__center">
                    <SearchIcon /><input type="text" placeholder="search" />
                </div>
                <div className="nav__right">
                    <HomeIcon />
                    <img src={message_icon} alt="message" />

                    <AddBoxOutlinedIcon />
                    <FavoriteBorderIcon />
                    <Avatar src={profile} alt="profile" />

                </div>
            </div>
        </AppBar>
    )
}

export default Navbar
