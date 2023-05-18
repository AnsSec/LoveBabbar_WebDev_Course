const express=require('express');
const router=express.Router();

const {localfileUpload,imageUploader,videoUploader}=require('../controllers/fileUpload');

//api route
router.post('/localFileUpload',localfileUpload);
router.post('/imageUploader',imageUploader);
router.post('/videoUploader',videoUploader);

module.exports=router;


