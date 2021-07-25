import React, { useEffect, useState } from 'react'
import PostHeader from './PostHeader'
import PostBottom from './PostBottom'
import '../css/post.css';

function Post({ topImage, id, userid, caption, photo, username, likes, completedetail }) {

    return (

        <div className="post">
            <PostHeader username={username} userid={userid} topImage={topImage} />
            <img src={photo} alt="alt" />
            <PostBottom topImage={topImage} likes={likes} caption={caption} username={username} postedByid={id} completedetail={completedetail} />
        </div>
    )
}

export default Post
