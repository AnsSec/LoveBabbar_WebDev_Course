const express=require('express');
const router=express.Router();

const {localfileUpload,imageUploader}=require('../controllers/fileUpload');

//api route
router.post('/localFileUpload',localfileUpload);
router.post('/imageUploader',imageUploader);

module.exports=router;


