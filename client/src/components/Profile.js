import React from 'react'
import Navbar from './Navbar'
import '../css/porfile.css'
import { Avatar } from '@material-ui/core'
import Settings from '@material-ui/icons/Settings'
import Highlight from './Highlight'
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';

const profile = "https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg";
const highlight_img = "https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg";
function Profile() {
    return (
        <div className="profile">
            <Navbar />

            <div className="profile__profile">
                <div className="profile__top">
                    <div className="profile__topLeft">
                        <Avatar src={profile} />
                    </div>
                    <div className="profile__topRight">
                        <div className="profile__user">
                            <div className="profile__username">username</div>
                            <div className="profile__edit">Edit Profile</div>
                            <div className="profile__setting"><Settings /></div>
                        </div>
                        <div className="profile_posts">
                            <div className="profile__post">38 posts</div>
                            <div className="profile__follower">251 followers</div>
                            <div className="profile__followings">163 followings</div>
                        </div>
                        <div className="profile__displayName">
                            Alok Kumar
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

                    <div className="profile__photo">
                        <img src={profile} alt="uploaded" />
                    </div>
                    <div className="profile__photo">
                        <img src={profile} alt="uploaded" />
                    </div>
                    <div className="profile__photo">
                        <img src={profile} alt="uploaded" />
                    </div>
                    <div className="profile__photo">
                        <img src={profile} alt="uploaded" />
                    </div>
                    <div className="profile__photo">
                        <img src={profile} alt="uploaded" />
                    </div>
                    <div className="profile__photo">
                        <img src={profile} alt="uploaded" />
                    </div>
                    <div className="profile__photo">
                        <img src={profile} alt="uploaded" />
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Profile
