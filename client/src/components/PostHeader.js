import { Avatar } from '@material-ui/core'
import React, { useContext } from 'react'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Link } from 'react-router-dom'
import '../css/postheader.css'
import { UserContext } from '../App';

const profile_img = "https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg"

function PostHeader({ username, userid }) {
    const { state, dispatch } = useContext(UserContext);
    return (
        <div className="postheader">
            <div className="postheader__left">
                <Avatar src={profile_img} alt="profile" />
                <div className="postheader__name"><Link to={userid !== state._id ? `/profile/${userid} ` : "/profile"}>{username}</Link></div>
            </div>
            <div className="postheader__right">
                <MoreHorizOutlinedIcon />
            </div>
        </div>
    )
}

export default PostHeader
