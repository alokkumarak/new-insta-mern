// api_key_sendGrid=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
const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const nodemailer = require("nodemailer")
const sendGrid = require("nodemailer-sendgrid-transport");

// initialise user with email
const transport = nodemailer.createTransport(sendGrid({
    auth: {
        api_key: "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"
    }
}))

//call the user model "users" to create database user
const users = mongoose.model('users');

const Mustsignin = require('../middleWares/requireLogin.js')
router.get("/mustsignin", Mustsignin, (req, res) => {
    res.send("hello signed in user");
})


router.post('/signup', (req, res) => {
    const { username, email, password, confirmPassword, profile } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        return res.status(405).json({ error: "fill all the required field!!" });
    }
    if (password != confirmPassword) {
        return res.status(405).json({ error: "password and confirm password should be same!!" });
    }
    users.findOne({ email: email })
        .then((saveUser) => {
            if (saveUser) {
                return res.status(405).json({ error: "user is already exist with this email" })
            }
            bcrypt.hash(password, 15)
                .then(hashedPassword => {
                    const user = new users({
                        email,
                        username,
                        password: hashedPassword,
                        profile
                    })
                    user.save()
                        .then(user => {
                            // now send mail when user is successfully signedup
                            // console.log(user.email)
                            transport.sendMail({
                                to: user.email,
                                from: "alok.sonaili@gmail.com",
                                subject: "successfully registered with Instagram",
                                html: "<h1>Successfully signed up with instagram......</h1>"
                            })
                            res.json({ message: "successfully registered with Instagram" });
                        }).catch(error => {
                            console.log(error.message);
                        })
                })

        }).catch(error => {
            console.log(error.message);
        })

})



router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(405).json({ error: "Enter email and password" });
    }
    users.findOne({ email: email })
        .then(presendUser => {
            if (!presendUser) {
                return res.status(405).json({ error: "Invalid email and password" });
            }
            //compare password with bcryptpassword
            bcrypt.compare(password, presendUser.password)
                .then(ifMatchedPassword => {
                    if (ifMatchedPassword) {
                        const generateToken = jwt.sign({ _id: presendUser._id }, process.env.JSON_WEB_TOKEN)
                        const { _id, username, profile } = presendUser;
                        res.json({ token: generateToken, message: "successfully logged in !!!", user: { _id, username, profile } });

                    }
                    else {
                        res.status(405).json({ error: "Invalid email and password" })
                    }
                })
                .catch(error => {
                    console.log(error.message);
                })
        })
        .catch(error => {
            console.log(error.message);
        })
})



module.exports = router;