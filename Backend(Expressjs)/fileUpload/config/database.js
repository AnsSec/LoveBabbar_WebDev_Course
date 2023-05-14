const mongoose=require('mongoose')
require('dotenv').config();

exports.connect=()=>{
    mongoose.connect(process.env.DB,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log('DB connected successfully'))
    .catch((err)=>{
        console.log(`DB connection error ${err}`)
        process.exit(1);
    });
};