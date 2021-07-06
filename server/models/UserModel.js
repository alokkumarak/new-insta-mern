const mongoose=require('mongoose');

const UserModel=new mongoose.Schema({
   username:{
       type:String,
       required:true
   },
   email:{
       type:String,
       required:true
   },
   password:{
       type:String,
       required:true
   }
})

mongoose.model("users",UserModel);