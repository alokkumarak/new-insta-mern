import React, { useState, useEffect } from 'react'
import Post from './Post'
import '../css/posts.css'

function Posts() {

    const [completePost, setCompletePost] = useState([]);

    useEffect(() => {
        fetch('/allpost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("instaToken")
            }
        }).then(res => res.json())
            .then(result => {
                // console.log(result.posts[0].likes)
                setCompletePost(result.posts);
            })
    }, [])



    return (
        <div className="posts">
            {
                completePost.map(post => {
                    return <Post likes={post.likes.length} key={post._id} id={post._id} caption={post.caption} photo={post.photo} username={post.createdBy.username} completedetail={post} />

                })
            }
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
        </div>
    )
}

export default Posts
