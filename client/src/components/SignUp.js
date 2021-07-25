import React, { useEffect, useState } from 'react'
import '../css/signup.css';
import phoneImage from '../assets/exact-image.png'
import { Button, Input } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import { useSnackbar } from "notistack"
import validator from 'validator';

const contain = "Passwords must contain:"
const lower = "atleast 1 lower case letter [a-z], atleast 1 upper case letter [A-Z]"
const symbol = "atleast 1 numeric character [0-9] and atleast 1 special character: ~`!@#$%^&*()-_+={}[]|:<>,./?"

function SignUp() {
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [profile, setProfile] = useState("")
    const [url, setUrl] = useState(undefined)

    useEffect(() => {
        if (url) {
            uploadData();
        }
    }, [url])

    const uploadProfile = () => {
        const data = new FormData()
        data.append('file', profile);
        data.append('upload_preset', 'insta-post')
        data.append('cloud_name', 'dpucwezsk')
        fetch('https://api.cloudinary.com/v1_1/dpucwezsk/image/upload', {
            method: 'post',
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)

            })
            .catch(error => {
                console.log(error);
            })
        setProfile("");
    }

    const uploadData = () => {
        if (password.length <= 6) {
            enqueueSnackbar('password must be atleast 6 character', {
                variant: 'error',
            });
            return
        }

        if (validator.isStrongPassword(password, {
            minLength: 6, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {

            fetch("/signup", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    confirmPassword,
                    profile: url
                })
            }).then(res => res.json())
                .then(signupData => {
                    if (signupData.error) {
                        enqueueSnackbar(signupData.error, {
                            variant: 'error',
                        });
                    }
                    else {
                        enqueueSnackbar(signupData.message, {
                            variant: 'success',
                        });
                        history.push('/login');
                        setUsername("");
                        setEmail("");
                        setPassword("");
                        setConfirmPassword("");
                    }
                })
                .catch(error => console.log(error));

        }
        else {

            enqueueSnackbar(symbol, {
                variant: 'warning',
            });
            enqueueSnackbar(lower, {
                variant: 'warning',
            });
            enqueueSnackbar(contain, {
                variant: 'error',
            });

        }

    }

    const signup = () => {
        //here i'm using proxy to protact backend server
        if (profile) {
            uploadProfile();
        }
        else {
            uploadData();
        }

    }

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
                                <input
                                    className="signup__textField"
                                    type="email" placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    className="signup__textField"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                    className="signup__textField"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <input
                                    className="signup__textField"
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <Input
                                    type="file"
                                    placeholder="upload image here"
                                    style={{ borderBottom: "1px solid rgb(230, 227, 227)", color: '#ffffff' }}
                                    onChange={(e) => setProfile(e.target.files[0])}
                                    target="upload profile pic"
                                />
                                <Button
                                    className="signup__fb"
                                    style={{ marginTop: 15, width: '100%' }}
                                    onClick={signup}>Sign up</Button>

                            </form>
                            <p className="signup__small">By signing up, you agree to our <b>Terms</b> , <b>Data Policy and Cookies Policy </b>.</p>
                        </div>
                    </div>

                    <div className="signup__login">
                        <p>Have an account? <Link to='/login' style={{ color: '#0095f6' }}>Log in</Link></p>
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
