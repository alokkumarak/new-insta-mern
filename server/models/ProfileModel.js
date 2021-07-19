const mongoose = require("mongoose");

const ProfileModel = new mongoose.Schema({
    profile: {
        type: String,
        required: true
    }
})

mongoose.model('profilepic', ProfileModel);