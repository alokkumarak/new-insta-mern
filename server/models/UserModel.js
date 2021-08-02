const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        default: "https://res.cloudinary.com/dpucwezsk/image/upload/v1627230708/avatar-image_u8kmpz.png"
    }
})

mongoose.model("users", UserModel);