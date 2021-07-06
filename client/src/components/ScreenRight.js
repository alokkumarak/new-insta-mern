import { Avatar } from '@material-ui/core';
import React from 'react'
import '../css/screenright.css';

const my_profile = "https://i.pinimg.com/originals/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg"

function ScreenRight() {
    return (
        <div className="screenright">
            <div className="screenright__top">
                <div className="left">
                    <Avatar src={my_profile} />
                    <div className="left_user">
                        <div className="username">username</div>
                        <div className="password">user.user@gamil.com</div>
                    </div>

                </div>
                <div className="right">
                    Switch
                </div>
            </div>
            <div className="screenright__bottom">
                <div className="suggestion">
                    <div className="suggestion__left">Suggestions For You</div>
                    <div className="suggestion__right">See All</div>
                </div>
                <div className="follow">
                    <div className="follow__users">
                        <Avatar src={my_profile} />
                        <div className="follow__user">
                            <div className="follow__username">username</div>
                            <div className="follow__password">user.user@gamil.com</div>
                        </div>

                    </div>
                    <div className="follow__right">
                        follow
                    </div>
                </div>
                <div className="follow">
                    <div className="follow__users">
                        <Avatar />
                        <div className="follow__user">
                            <div className="follow__username">username</div>
                            <div className="follow__password">user.user@gamil.com</div>
                        </div>

                    </div>
                    <div className="follow__right">
                        follow
                    </div>
                </div>
                <div className="follow">
                    <div className="follow__users">
                        <Avatar />
                        <div className="follow__user">
                            <div className="follow__username">username</div>
                            <div className="follow__password">user.user@gamil.com</div>
                        </div>

                    </div>
                    <div className="follow__right">
                        follow
                    </div>
                </div>
                <div className="follow">
                    <div className="follow__users">
                        <Avatar />
                        <div className="follow__user">
                            <div className="follow__username">username</div>
                            <div className="follow__password">user.user@gamil.com</div>
                        </div>

                    </div>
                    <div className="follow__right">
                        follow
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ScreenRight
