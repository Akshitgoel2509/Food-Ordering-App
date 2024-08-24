/* eslint-disable no-undef */
const express=require('express')
const router= express.Router()
const User=require('../models/User')
const {body,validationResult}=require("express-validator")
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const jwtSecret="fklnflvkflkvnf#3R$##$fdffjrfjjfj"

router.post("/createuser", 
body("name").isLength({min:3}),
body("email").isEmail().optional(),
  body("password").isLength({min:5}).optional(),
//   body("passwordConfirmation").custom( (value,{req})=>{
//     return value===req.body.password;
//  }), 
// for password confirmation 
async(req,res)=>{
    try{
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json( {errors: errors.array()} )
        }

        const salt=await bcrypt.genSalt(10);
        let secPassword=await bcrypt.hash(req.body.password,salt)


        await User.create({
              name:req.body.name,
              email:req.body.email,
              password:secPassword,
              location:req.body.location
        }).then(res.json({success:true}));

    } catch(error){
        console.log(error);
        res.json({success:false})
    }
}
)

router.post("/loginuser",
body("email").isEmail().optional(),
body("password").isLength({min:5}).optional(),
// body("password").custom( (value,{req})=>{
//   return value===req.body.password;
// }),
   async(req,res)=>{
    let email=req.body.email;
    try{
        let userData=await User.findOne({email});
        if(!userData){
            return res.status(400).json({errors:"Try logging with correct credentials"})
        }
        const pwdCompare=await bcrypt.compare(req.body.password,userData.password)
        if(!pwdCompare){
            return res.status(400).json({errors:"Try logging with correct credentials"})
        }
        const data={
            user:{
                id:userData.id
            }
        }
        const authToken=jwt.sign(data,jwtSecret);
        return res.json({success:true,authToken:authToken})

    } catch(error){
        console.log(error);
        res.json({success:false})
    }
}
)

module.exports=router;
