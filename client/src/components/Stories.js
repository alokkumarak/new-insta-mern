
import React, { useContext } from 'react'
import '../css/stories.css';
import Story from './Story';
import { UserContext } from '../App';

const story_img = "https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg"
const story_img1 = "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80";
const story_img2 = "https://www.whatsappimages.in/wp-content/uploads/2021/01/Latest-Beautiful-Girls-Wallpaper-Download.jpg"
function Stories() {
    const { state, dispatch } = useContext(UserContext);
    return (
        <div className="stories">

            <Story story_img={state ? state.profile : story_img} story_name="My story" />
            <Story story_img={story_img1} story_name="alok kumar" />
            <Story story_img={story_img2} story_name="alok kumar" />
            <Story story_img={story_img} story_name="alok kumar" />
            <Story story_img={story_img1} story_name="alok kumar" />
            <Story story_img={story_img2} story_name="alok kumar" />
            <Story story_img={story_img2} story_name="alok kumar" />
            <Story story_img={story_img} story_name="alok kumar" />
            <Story story_img={story_img1} story_name="alok kumar" />
            <Story story_img={story_img2} story_name="alok kumar" />
            <Story story_img={story_img} story_name="alok kumar" />
            <Story story_img={story_img1} story_name="alok kumar" />

        </div>
    )
}

export default Stories
