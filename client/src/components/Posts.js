import React, { useState, useEffect } from 'react'
import Post from './Post'
import '../css/posts.css'

function Posts() {

    const [completePost, setCompletePost] = useState([]);
    const [time, setTime] = useState(true);


    useEffect(() => {
        fetch('/allpost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("instaToken")
            }
        }).then(res => res.json())
            .then(result => {
                // console.log(result.posts[0].likes)
                // console.log(result.posts);
                setCompletePost(result.posts);

                // setTimeout(setTime(false), 5000)

            })
    }, [])



    return (

        <div className="posts">
            {
                completePost.map(post => {
                    return <Post likes={post.likes.length} key={post._id} id={post._id} caption={post.caption} photo={post.photo} username={post.createdBy.username} topImage={post.createdBy.profile} userid={post.createdBy._id} completedetail={post} />

                })
            }

        </div>


    )
}

export default Posts
