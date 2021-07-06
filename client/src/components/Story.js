import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/story.css'




function Story({ story_img, story_name }) {
    return (

        <div className="story">
            <Avatar src={story_img} />
            <div className="story__title">{story_name}</div>
        </div>


    )
}

export default Story
