const express=require("express");
const app=express();

//used to parse req.body in express -> PUT or POST
const bodyParser=require("body-parser");

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());


const port=4000

app.listen(port,()=>{
    console.log(`App Started port number ${port}`)
})

//routs
app.get('/',(req,res)=>{  //data server se lena 
    res.send("hello")
})

app.post("/api/cars",(req,res)=>{ //data server ko bhejna 
    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("car send successfully.")
})

const mongoosedb=require('mongoose')
mongoosedb.connect('mongodb://127.0.0.1:27017/cars',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{console.log("Connection Successfull")})
.catch((error)=>{console.log("Connection Failed"+error)})