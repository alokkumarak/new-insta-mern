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
    createdBy: {
        type: ObjectId,
        ref: 'users'
    }
})

mongoose.model('posts', PostModel);