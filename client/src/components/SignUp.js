import React from 'react'
import '../css/signup.css';
import phoneImage from '../assets/exact-image.png'
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';

function SignUp() {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
    return (
        <div className="signup">
            <div className='signup__container'>
                <div className="signup__image">
                    <img src={phoneImage} alt="phine" />
                </div>
                <div className="signup__right">
                    <div className="signup__card">
                        <div className="signup__top">
                            <img src={logo} alt="instagram logo" />
                            <p className="signup__text">
                                Sign up to see photos and videos from your friends.
                            </p>
                            <p>
                                <Button className="signup__fb">
                                    <FacebookIcon />&nbsp;
                                    Log in with Facebook
                                </Button>
                            </p>
                            <div className="signup__devider">
                                <div className="signup__devider1"></div>
                                <div className="signup__devider2">OR</div>
                                <div className="signup__devider3"></div>
                            </div>
                        </div>
                        <div className="signup__bottom">
                            <form className="signup__form">
                                <input className="signup__textField" type="email" placeholder="Email" />
                                <input className="signup__textField" type="text" placeholder="Username" />
                                <input className="signup__textField" type="password" placeholder="Password" />
                                <input className="signup__textField" type="password" placeholder="Confirm Password" />
                                <Button className="signup__fb" style={{ marginTop: 15, width: '100%' }}>Sign up</Button>

                            </form>
                            <p className="signup__small">By signing up, you agree to our <b>Terms</b> , <b>Data Policy and Cookies Policy </b>.</p>
                        </div>
                    </div>

                    <div className="signup__login">
                        <p>Have an account? <Link to="/login" style={{ color: '#0095f6' }}>Log in</Link></p>
                    </div>
                    <div className="signup__getapp">
                        <div className="signup__getapp1">
                            Get the app
                        </div>
                        <div className="signup__getapp2">
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
