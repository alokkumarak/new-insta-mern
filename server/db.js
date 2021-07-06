//adminalok

require('dotenv').config();
const mongoose=require("mongoose");

const URL=process.env.MONGO_URI;

const mongoDB=async()=>{
    try {
        await mongoose.connect(URL,
            {useNewUrlParser:true,useUnifiedTopology:true})
             console.log("mongodb connection successfully");
              
    } catch (error) {
        console.log("error in connection ",error)
    }
}

module.exports =mongoDB;              
