const express=require('express')
const app=express();

require('dotenv').config();
const PORT=process.env.PORT||5000

//middleware
app.use(express.json());

const blog=require('./routes/blog')
//mount
app.use('/api/v1',blog);

app.listen(PORT,()=>{
    console.log(`Server Started ${PORT}`)
})

const connectwithdb=require('./config/database')
connectwithdb();
