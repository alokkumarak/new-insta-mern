import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../css/porfile.css'
import { Avatar, Input } from '@material-ui/core'
import Settings from '@material-ui/icons/Settings'
import Highlight from './Highlight'
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import { UserContext } from '../App'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { useSnackbar } from "notistack"
import { useHistory } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const profile = "https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg";
const highlight_img = "https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg";
function Profile() {
    const [mypic, setMypic] = useState([]);
    const { state, dispatch } = useContext(UserContext);
    const [photo, setPhoto] = useState("");
    const [url, setUrl] = useState("");
    const [openabc, setOpenabc] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const anchorRef = React.useRef(null);
    const [profilePicture, setProfilePicture] = useState([]);



    const history = useHistory();

    useEffect(() => {
        fetch('/mypost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("instaToken")
            }
        }).then(res => res.json())
            .then(myprofile => {
                // console.log(myprofile.mypost);
                setMypic(myprofile.mypost)
            })
    }, [])



    useEffect(() => {

        if (url) {
            // console.log(url)
            fetch('/profilepic', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('instaToken')
                },
                body: JSON.stringify({
                    profile: url
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
                        // history.push('/profile');
                    }
                })
                .catch(error => {
                    console.log(error);
                })
            // window.location.reload(false);

            setOpenabc(false)
        }
    }, [url])

    //uploading photo to the cloudinary then useEffect for the post using token becaouse it is a private resourse
    const uploadprofile = () => {
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

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        // setOpen(false);
        setOpenabc(false)
    };
    const handleClickOpen = () => {
        setOpenabc(true);
    };

    // show profile pic
    useEffect(() => {
        fetch('/myprofilepic', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("instaToken")
            }
        }).then(res => res.json())
            .then(result => {
                // console.log(result.posts[0].likes)
                // console.log(result.posts);
                console.log(result)
                setProfilePicture(result.mypost);
                // setTimeout(setTime(false), 5000)

            })
    }, [])



    return (
        <div className="profile">
            <Navbar />
            {/* {console.log(profilePicture)} */}
            <div className="profile__profile">
                <div className="profile__top">
                    <div className="profile__topLeft">
                        <Avatar src={profilePicture} />
                        <AddAPhotoIcon onClick={handleClickOpen} />
                    </div>
                    <div className="profile__topRight">
                        <div className="profile__user">
                            <div className="profile__username">{state ? state.username : "loading..."}</div>
                            <div className="profile__edit">Edit Profile</div>
                            <div className="profile__setting"><Settings /></div>
                        </div>
                        <div className="profile_posts">
                            <div className="profile__post">{mypic.length} posts</div>
                            <div className="profile__follower">251 followers</div>
                            <div className="profile__followings">163 followings</div>
                        </div>
                        <div className="profile__displayName">
                            {state && state.email}
                        </div>
                        <div className="profile__bio">
                            🤍ᴊᴜsᴛʀᴇᴀᴄᴛᴛʜɪɴɢs🤍<br />
                            Route path="/" sᴀᴛɪsғᴀᴄᴛɪᴏɴ Route<br />
                            Route path="/effort" ʜᴀᴘᴘɪɴᴇss Route<br />
                            Route path="/.." ᴅɪsᴛʀᴀᴄᴛɪᴏɴ /Route
                        </div>

                    </div>
                </div>

                <div className="profile__highlights">
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />
                    <Highlight highlight_img={highlight_img} highlight_name="highlight name" />

                </div>
                <div className="profile__line"></div>

                <div className="profile__igtv">
                    <div className="profile__p"><GridOnOutlinedIcon />&nbsp;POSTS</div>
                    <div className="profile__q"><LiveTvOutlinedIcon />&nbsp;IGTV</div>
                    <div className="profile__r"><BookmarkBorderOutlinedIcon />&nbsp;SAVED</div>
                    <div className="profile__s"><AccountBoxOutlinedIcon />&nbsp;TAGGED</div>
                </div>

                <div className="profile__photos">
                    {
                        mypic.map(post => {
                            return (
                                <div className="profile__photo">
                                    <img src={post.photo} alt="uploaded" />
                                </div>
                            )
                        })
                    }
                </div>

                {/* upload profile */}
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

                            <Input
                                type="file"
                                placeholder="upload image here"
                                style={{ borderBottom: "1px solid rgb(230, 227, 227)", color: '#ffffff' }}

                                onChange={(e) => setPhoto(e.target.files[0])}
                            />
                            <button
                                onClick={uploadprofile}
                            >upload
                            </button>
                        </div>
                    </div>
                </Dialog>


            </div>

        </div>
    )
}

export default Profile
