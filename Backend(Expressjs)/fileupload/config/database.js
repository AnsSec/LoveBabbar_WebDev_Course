const mongoose=require('mongoose')
require('dotenv').config()

exports.connect=()=>{
    mongoose.connect(process.env.DB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("db connect successfully"))
    .catch((err)=>{console.log(`db connection error ${err}`)
        process.exit(1);
    })
}