const express=require("express");
const app=express();

const port=4000

app.listen(port,()=>{
    console.log(`App Started port number ${port}`)
})

app.get('/',(req,res)=>{
    res.send("hello")
})