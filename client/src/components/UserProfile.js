import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../css/porfile.css'
import { Avatar } from '@material-ui/core'
import Settings from '@material-ui/icons/Settings'
import Highlight from './Highlight'
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import { UserContext } from '../App'
import { useParams } from 'react-router-dom'
import InstagramIcon from '@material-ui/icons/Instagram';

const profile = "https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg";
const highlight_img = "https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg";
function Profile() {
    const [usersProfile, setUsersProfile] = useState("");
    const [usersProfilePic, setUsersProfilePic] = useState([]);
    const { state, dispatch } = useContext(UserContext);
    const { id } = useParams();


    useEffect(() => {
        fetch(`/profile/${id}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("instaToken")
            }
        }).then(res => res.json())
            .then(userProfile => {
                // console.log(userProfile.user)
                setUsersProfile(userProfile.user)
                setUsersProfilePic(userProfile.resPost)
            })
    }, [])

    return (
        <div className="profile">
            <Navbar />
            {
                usersProfile && usersProfilePic ? <div className="profile__profile">
                    <div className="profile__top">
                        <div className="profile__topLeft">
                            <Avatar src={profile} />
                        </div>
                        <div className="profile__topRight">
                            <div className="profile__user">
                                <div className="profile__username">{usersProfile.username}</div>

                            </div>
                            <div className="profile_posts">
                                <div className="profile__post">{usersProfilePic.length} posts</div>
                                <div className="profile__follower">251 followers</div>
                                <div className="profile__followings">163 followings</div>
                            </div>
                            <div className="profile__displayName">
                                {usersProfile.email}
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
                            usersProfilePic.map(post => {
                                return (
                                    <div className="profile__photo">
                                        <img src={post.photo} alt="uploaded" />
                                    </div>
                                )
                            })
                        }




                    </div>

                </div> :
                    <h2 style={{ color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><InstagramIcon /></h2>
            }


        </div>
    )
}

export default Profile
