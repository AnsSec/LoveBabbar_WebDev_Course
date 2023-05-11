const mongoose=require('mongoose')

require('dotenv').config();

exports.connect=()=>{
    mongoose.connect(process.env.DATABASE,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("DB connected successfully"))
    .catch(err=>{
        console.log(`connection error ${err}`) 
        process.exit(1)})
}

