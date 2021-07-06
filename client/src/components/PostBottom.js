import React from 'react'
import '../css/postbottom.css';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

const comment_icon = "https://cdn141.picsart.com/328471446044211.png?type=webp&to=min&r=1280"

function PostBottom() {
    return (
        <div className="postbottom">
            <div className="postbottom__icons">
                <div className="postbottom__iconleft">
                    <FavoriteBorderOutlinedIcon />
                    <img src={comment_icon} alt="comment icon" />
                    <NearMeOutlinedIcon />
                </div>
                <div className="postbottom__iconright">
                    <TurnedInNotIcon />
                </div>
            </div>
            <div className="postbottom__likes">
                12,025 likes
            </div>
            <div className="postbottom__comments">
                View all 112 comments
            </div>
            <div className="comments">
                <div><b>Rajan Kumar</b> this is really nice pic.</div>
                <div><b>Alok Kumar</b> this is really nice pic jjdhjd n fsdfj n nbfds.</div>
            </div>
            <div className="timestamp">
                22 Hours Ago
            </div>
        </div>
    )
}

export default PostBottom
