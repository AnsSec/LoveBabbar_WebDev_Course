const File=require('../models/file');

//localfile upload
exports.localfileUpload=async(req,res)=>{
    try {
        //fetch file
        const file=req.files.file;
        console.log('file is here ->',file);

        let path=__dirname+"/files/"+Date.now() +`.${file.name.split('.')[1]}`;

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
};

const isFileTypeSupported=(type,supportedTypes)=>{
    return supportedTypes.includes(type);
};

const uploadFileToCloudinary=async(file,folder)=>{

}

//image uploader handler
exports.imageUploader=async(req,res)=>{
    try {
        //data fetch
        const {name,tags,email}=req.body;
        console.log(name,tags,email);

        const file=req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes=['jpg','jpeg','png']
        const fileType=file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File format not supported'
            });
        };
        //file format is supperted

    } catch (error) {
        
    }
}