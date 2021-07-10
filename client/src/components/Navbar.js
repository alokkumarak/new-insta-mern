import { AppBar, Avatar } from '@material-ui/core'
import React from 'react'
import '../css/navbar.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import SyncIcon from '@material-ui/icons/Sync';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom'

function Navbar() {
    const logo = "https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
    const message_icon = 'https://www.pinclipart.com/picdir/big/392-3928236_robina-campus-facebook-messenger-icon-white-clipart.png'
    const profile = "https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg";


    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <AppBar >
            <div className="nav__container">
                <Link to="/home">
                    <div className="nav__left">
                        <img src={logo} alt="instagram logo" />
                    </div>
                </Link>
                <div className="nav__center">
                    <SearchIcon /><input type="text" placeholder="search" />
                </div>
                <div className="nav__right">
                    <Link to="/home"><HomeIcon /></Link>
                    <img src={message_icon} alt="message" />

                    <AddBoxOutlinedIcon />
                    <FavoriteBorderIcon />
                    <Avatar
                        src={profile}
                        alt="profile"
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle} />

                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <div className="thisone">
                                    <Paper >
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                <MenuItem onClick={handleClose}><Link to="/profile"><AccountCircleOutlinedIcon />&nbsp;&nbsp;&nbsp;Profile</Link></MenuItem>
                                                <MenuItem onClick={handleClose}><BookmarkBorderOutlinedIcon />&nbsp;&nbsp;&nbsp;Saved</MenuItem>
                                                <MenuItem onClick={handleClose}><SettingsIcon />&nbsp;&nbsp;&nbsp;Settings</MenuItem>
                                                <MenuItem onClick={handleClose}><SyncIcon />&nbsp;&nbsp;&nbsp;Switch Account</MenuItem>
                                                <hr />
                                                <MenuItem onClick={handleClose}><PowerSettingsNewIcon />&nbsp;&nbsp;&nbsp;Log Out</MenuItem>


                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </div>
                            </Grow>
                        )}
                    </Popper>

                </div>
            </div>
        </AppBar>
    )
}

export default Navbar
