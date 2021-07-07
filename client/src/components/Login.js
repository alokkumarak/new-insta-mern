import React from 'react'
import '../css/login.css';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';

function SignUp() {
    const logo = "https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
    return (
        <div className="login">
            <div className='login__container'>

                <div className="login__right">
                    <div className="login__card" >
                        <div className="login__top">
                            <img src={logo} alt="instagram logo" />

                        </div>
                        <div className="login__bottom">
                            <form className="login__form">
                                <input className="login__textField" type="email" placeholder="Email" />

                                <input className="login__textField" type="password" placeholder="Password" />

                                <Button className="login__fb" style={{ marginTop: 15, width: '100%' }}>Sign up</Button>

                            </form>

                        </div>
                        <div className="login__devider" style={{ marginTop: 10 }}>
                            <div className="login__devider1"></div>
                            <div className="login__devider2">OR</div>
                            <div className="login__devider3"></div>
                        </div>
                        <p >
                            <Link style={{ color: '#385185', }}>
                                <FacebookIcon style={{ color: '#385185' }} />&nbsp;
                                <span>Log in with Facebook</span>
                            </Link>
                        </p>
                        <p style={{ fontSize: '15px' }}>forget password?</p>
                    </div>

                    <div className="login__login">
                        <p>don't have an account? <Link to="/" style={{ color: '#0095f6' }}>signup</Link></p>
                    </div>

                    <div className="login__getapp">
                        <div className="login__getapp1">
                            Get the app
                        </div>
                        <div className="login__getapp2">
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="first" />
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="second" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
