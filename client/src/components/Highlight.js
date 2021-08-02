import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/highlight.css'




function Story({ highlight_img, highlight_name }) {
    return (

        <div className="highlight">
            <Avatar src={highlight_img} />
            <div className="highlight__title">{highlight_name}</div>
        </div>


    )
}

export default Story
