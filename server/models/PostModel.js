const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const PostModel = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    likes: [{
        type: ObjectId,
        ref: 'users'
    }],
    comments: [{
        text: String,
        postedBy: {
            type: ObjectId,
            ref: 'users'
        }
    }],
    createdBy: {
        type: ObjectId,
        ref: 'users'
    }
}, { timestamps: true })

mongoose.model('posts', PostModel);