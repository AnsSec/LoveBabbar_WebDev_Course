const express=require('express');
const app=express();

//load config from env
require('dotenv').config();

const PORT=process.env.PORT || 5000;

//middleware  to parse json requested body
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`server start secussfully ${PORT}`)
})