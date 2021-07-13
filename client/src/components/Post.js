import React from 'react'
import PostHeader from './PostHeader'
import PostBottom from './PostBottom'
import '../css/post.css';

function Post({ id, caption, photo, username }) {
    return (
        <div className="post">
            <PostHeader username={username} />
            <img src={photo} alt="alt" />
            <PostBottom caption={caption} />
        </div>
    )
}

export default Post
