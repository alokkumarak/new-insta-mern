const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Mustsignin = require('../middleWares/requireLogin.js')
const posts = mongoose.model('posts')
const User = mongoose.model('users');

router.get('/profile/:id', Mustsignin, (req, res) => {
    User.findOne({ _id: req.params.id })
        .select("-password")
        .then(user => {
            posts.find({ createdBy: req.params.id })
                .populate("createdBy", "_id username")
                .exec((err, resPost) => {
                    if (err) {
                        return res.status(502).json({ error: err })
                    }
                    else {
                        res.json({ user, resPost })
                    }
                })
        }).catch(err => {
            return res.status(503).json({ error: err })
        })
})

module.exports = router