import React from 'react'
import PostHeader from './PostHeader'
import PostBottom from './PostBottom'
import '../css/post.css';

function Post() {
    return (
        <div className="post">
            <PostHeader />
            <img src="https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg" alt="alt" />
            <PostBottom />
        </div>
    )
}

export default Post
