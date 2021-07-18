import { AppBar, Avatar, Input } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
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
import { Link, useHistory } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { useSnackbar } from "notistack"
import CloseIcon from '@material-ui/icons/Close';
import { UserContext } from '../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Navbar() {
    const logo = "https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
    const message_icon = 'https://www.pinclipart.com/picdir/big/392-3928236_robina-campus-facebook-messenger-icon-white-clipart.png'
    const profile = "https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg";
    const history = useHistory();
    const { state, dispatch } = useContext(UserContext);
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = useState(false);
    const [openabc, setOpenabc] = useState(false);
    const anchorRef = React.useRef(null);
    const [caption, setCaption] = useState("");
    const [photo, setPhoto] = useState("");
    const [url, setUrl] = useState("");


    useEffect(() => {
        if (url) {
            fetch('/createpost', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('instaToken')
                },
                body: JSON.stringify({
                    caption,
                    photo: url
                })
            }).then(res => res.json())
                .then(post => {
                    if (post.error) {
                        enqueueSnackbar(post.error, {
                            variant: 'error',
                        });
                    }
                    else {
                        enqueueSnackbar(post.message, {
                            variant: 'success',
                        });
                        history.push('/home');
                    }
                })
                .catch(error => {
                    console.log(error);
                })
            window.location.reload(false);
            setCaption("")
            setOpenabc(false)
        }



    }, [url])

    //uploading photo to the cloudinary then useEffect for the post using token becaouse it is a private resourse
    const uploadPost = () => {
        const data = new FormData()
        data.append('file', photo);
        data.append('upload_preset', 'insta-post')
        data.append('cloud_name', 'dpucwezsk')
        fetch('https://api.cloudinary.com/v1_1/dpucwezsk/image/upload', {
            method: 'post',
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)

            })
            .catch(error => {
                console.log(error);
            })
        setPhoto("");
    }

    // this is for login drawer
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClickOpen = () => {
        setOpenabc(true);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
        setOpenabc(false)
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



    // logout function
    const logout = () => {
        localStorage.clear();
        dispatch({ Type: 'CLEAR' })
        history.push("/login");
    }

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

                    <AddBoxOutlinedIcon onClick={handleClickOpen} />
                    <FavoriteBorderIcon />
                    <Avatar
                        src={profile}
                        alt="profile"
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle} />

                    {/* post something  */}

                    <Dialog
                        open={openabc}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <div className="postpage">
                            <CloseIcon onClick={handleClose} />
                            <h1>Instagram</h1>

                            <div className="posthere">
                                <input
                                    type="text"
                                    placeholder="some caption here"
                                    value={caption}
                                    onChange={(e) => setCaption(e.target.value)}
                                    required
                                />
                                <Input
                                    type="file"
                                    placeholder="upload image here"
                                    style={{ borderBottom: "1px solid rgb(230, 227, 227)", color: '#ffffff' }}

                                    onChange={(e) => setPhoto(e.target.files[0])}
                                />
                                <button
                                    onClick={uploadPost}
                                >post
                                </button>
                            </div>
                        </div>
                    </Dialog>

                    {/* avatar list items */}
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
                                                <MenuItem onClick={logout}><PowerSettingsNewIcon />&nbsp;&nbsp;&nbsp;Log Out</MenuItem>


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
