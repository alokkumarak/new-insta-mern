import React from 'react'
import '../css/screenleft.css'
import Stories from './Stories'
import Posts from './Posts';


function ScreenLeft() {
    return (
        <div className="screenleft">
            <Stories />
            <Posts />
        </div>
    )
}

export default ScreenLeft
