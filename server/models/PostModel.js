const mongoose =require('mongoose');
const {ObjectId}=mongoose.Schema.Types;

const PostModel=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:'photo uri'
    },
    createdBy:{
        type:ObjectId,
        ref:'users' 
    }
})

mongoose.model('posts',PostModel);