const express=require('express');
const app=express();
//load config from env
require('dotenv').config();
//import routs for todo api
const todoRouts=require('./Routes/Todo');
//connect to the database
const dbConnect=require('./Config/database')

const PORT=process.env.PORT || 5000;

//middleware  to parse json requested body
app.use(express.json())


//mount TODO api routs
app.use('/api/v1',todoRouts);

//server start
app.listen(PORT,()=>{
    console.log(`server start secussfully at ${PORT} :)`);
});

dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HOME Page</h1>`)
})