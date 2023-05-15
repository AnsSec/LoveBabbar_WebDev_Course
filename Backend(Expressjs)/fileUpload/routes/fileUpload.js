const express=require('express');
const router=express.Router();

const {localfileUpload}=require('../controllers/fileUpload');

//api route
router.post('/localFileUpload',localfileUpload);
module.exports=router;


