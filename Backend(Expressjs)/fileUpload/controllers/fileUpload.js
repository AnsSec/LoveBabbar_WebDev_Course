const File=require('../models/file');

//localfile upload

exports.localfileUpload=async(req,res)=>{
    try {
        //fetch file
        const file=req.files.file;
        console.log('file is here ->',file);

        let path=__dirname+"/files/"+Date.now() +`${file.name.split('.')[1]}`;

        file.mv(path,(err)=>{
            console.log(err);
        });

        res.json({
            success:true,
            message:"local file uploaded successfully"
        });

    } catch (error) {
        console.log(`error found ${error}`);
    }
}