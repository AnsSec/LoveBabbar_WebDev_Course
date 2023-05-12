const express = require("express");
const router = express.Router();

const {login,signup}=require('../controllers/auth');
const {auth,isStudent,isAdmin}=require('../middlwares/auth')

router.post('/login',login);
router.post('/signup',signup);

//for testing
router.get('/test',auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the procted route for Test"
    })
})
//proctect Routs
router.get('/student',auth ,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the procted route for student"
    })
})

router.get('/admin',auth ,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the procted route for Admin"
    })
})



module.exports = router;