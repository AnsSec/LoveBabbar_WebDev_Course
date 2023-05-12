//auth,isStudent,isAdmin

const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.auth=(req,res,next)=>{
    try {
        //extract JWT Token
        const token=req.body.token;

        if(!token){
            return res.status(401).json({
                success:false,
                message:"token missing",
            });
        };
        
    } catch (error) {
        
    }
}