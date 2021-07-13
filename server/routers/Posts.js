const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Mustsignin = require('../middleWares/requireLogin.js')
const posts = mongoose.model('posts')

router.post('/createpost', Mustsignin, (req, res) => {
    const { caption, photo } = req.body
    if (!caption || !photo) {
        return res.status(405).json({ error: 'please add all the fields' });
    }
    req.user.password = undefined;
    const post = new posts({
        caption,
        photo,
        createdBy: req.user
    })
    post.save()
        .then(result => {
            res.json({ message: 'post created successfully!!!!', post: result })
        })
        .catch(error => {
            console.log(error.message);
        })
})

router.get('/allpost', Mustsignin, (req, res) => {
    posts.find()
        .populate("createdBy", "_id username")
        .then(posts => {
            res.json({ posts })
        })
        .catch(error => {
            console.log(error.message);
        })
})

router.get('/mypost', Mustsignin, (req, res) => {
    posts.find({ createdBy: req.user._id })
        .populate("createdBy", "_id username")
        .then(mypost => {
            res.json({ mypost })
        })
        .catch(error => {
            console.log(error);
        })
})

module.exports = router;