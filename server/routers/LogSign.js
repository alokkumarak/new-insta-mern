
const express=require('express');

const router=express.Router();
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


//call the user model "users" to create database user
const users=mongoose.model('users');

const Mustsignin =require('../middleWares/requireLogin.js')
router.get("/mustsignin",Mustsignin,(req,res)=>{
    res.send("hello signed in user");
})


router.post('/signup',(req,res)=>{
    const {username,email,password,confirmPassword}=req.body;

    if(!username || !email || !password || !confirmPassword){
        return res.status(405).json({error:"fill all the required field!!"});
    }
    if(password != confirmPassword){
        return res.status(405).json({error:"password and confirm password should be same!!"});
    }
    users.findOne({email:email})
    .then((saveUser)=>{
       if(saveUser){
           return res.status(405).json({error:"user is already exist with this email"})
        }
        bcrypt.hash(password,15)
          .then(hashedPassword=>{
            const user=new users({
                email,
                username,
                password:hashedPassword
            })
            user.save()
                .then(user=>{
                    res.json({message:"data saved successfully"});
                }).catch(error=>{
                    console.log(error.message);
                })
          })
        
    }).catch(error=>{
        console.log(error.message);
    })

})



router.post('/signin',(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(405).json({error:"Enter email and password"});
    }
    users.findOne({email:email})
          .then(presendUser=>{
              if(!presendUser){
                  return res.status(405).json({error:"Invalid email and password"});
              }
              //compare password with bcryptpassword
              bcrypt.compare(password,presendUser.password)
                     .then(ifMatchedPassword=>{
                         if(ifMatchedPassword){
                           const generateToken=jwt.sign({_id:presendUser._id},process.env.JSON_WEB_TOKEN)
                           
                           res.json({token:generateToken});

                         }
                         else{
                             res.status(405).json({error:"password matching error"})
                         }
                     })
                     .catch(error=>{
                         console.log(error.message);
                     })
          })
          .catch(error=>{
              console.log(error.message);
          })
})



module.exports=router;