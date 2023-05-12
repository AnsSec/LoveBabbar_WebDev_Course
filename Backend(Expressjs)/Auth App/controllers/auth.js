const bcrypt=require('bcrypt');
const user = require('../model/user');
const jwt=require('jsonwebtoken')
require('dotenv').config()
//signup rout handler
exports.signup=async (req,res)=>{
    try{
        //get data
        const {name,email,password,role}=req.body;

        //if user already exist
        const existingUser=await user.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already Exists',
            });
        };

        //secure password
        let hashPassword;
        try{
                                 //current Password, Salt
            hashPassword=await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:'Error in Hashing Password',
            });
        };

        //create entry for user
        const User=await user.create({
            name,email,password:hashPassword,role
        });

        return res.status(200).json({
            success:true,
            message:'User Created Successfully'
        });

    }
    catch(error){
        console.error(error);
        return res.status(404).json({
            success:false,
            message:'User Cannot Be Registered please try again later'
        })
    }
}

//login router handler
exports.login=async(req,res)=>{
    try {
        //data fetch
        const {email,password}=req.body;
        //validation on email and password
        if(!email||!password){
            return res.status(400).json({
                success:false,
                message:"Please fill all the detail carefully"
            })
        }

        //check for registered user
        let User=await user.findOne({email});

        if(!User){
            return res.status(401).json({
                success:false,
                message:"User is not registered"
            })
        }

        const payload={
            email:User.email,
            id:User._id,
            role:User.role,
        };

        //verify password & generate a jwt token
        if(await bcrypt.compare(password,User.password)) {
            //password match
            const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});
            User=User.toObject();
            User.token=token;
            User.password=undefined;
            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,

            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                User,
                message:"userLogged in successfully",
            })
        }
        else{
            //password don not match
            return res.status(403).json({
                success:false,
                message:"Password incorrect",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"login Failure",
        });
    };
}