const mongoose=require('mongoose')

require('dotenv').config();

const dbConnect=()=>{
    mongoose.connect(process.env.db_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log('db connection successfull'))
    .catch(()=>{console.log('connection error');
        process.exit(1);
    });
}

module.exports=dbConnect;
