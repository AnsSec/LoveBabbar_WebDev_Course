const express=require('express')
const app=express();

require('dotenv').config()
const PORT=process.env.PORT;

//cookie parser
const cookieParser=require('cookie-parser')
app.use(cookieParser())

//middleware
app.use(express.json());

require('./config/database').connect();

//route import
const user=require('./routes/user');
app.use('/api/v1',user);

//server start
app.listen(PORT,()=>{
    console.log(`Server start on ${PORT}`)
})
