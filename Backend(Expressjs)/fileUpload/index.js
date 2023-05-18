const express=require('express')
const app=express();

//port find
require('dotenv').config();
const PORT=process.env.PORT;

//middleware
app.use(express.json());
const fileUpload=require('express-fileupload');
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));

//Database connection
const db = require('./config/database');
db.connect();

//connection from cloud
const cloudinary=require('./config/cloudinary');
cloudinary.cloudinaryConnect();

//api routs mount
const Upload=require('./routes/fileUpload');
app.use('/api/v1/upload',Upload);

//server start
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})