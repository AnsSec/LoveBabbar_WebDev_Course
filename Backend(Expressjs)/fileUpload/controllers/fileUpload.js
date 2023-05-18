const File=require('../models/file');
const cloudinary=require('cloudinary').v2

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
        res.status(400).json({
            success:false,
            message:"something went wrong"
        });
    }
};

const isFileTypeSupported=(type,supportedTypes)=>{
    return supportedTypes.includes(type);
};

const uploadFileToCloudinary=async(file, folder)=>{
    const options={folder};
    options.resources_type='auto';
    return await cloudinary.uploader.upload(file.tempFilePath,options);
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
        const response=await uploadFileToCloudinary(file, 'Anshul');
        console.log(response)
        //entry on db
        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })

        res.json({
            success:true,
            image:fileData.imageUrl,
            message:'Image uploaded successfully'
        })

    } catch (error) {
        console.log(`error found ${error}`);
        res.status(400).json({
            success:false,
            message:"something went wrong"
        });
    }
};

//video upload handler
exports.videoUploader=async(req,res)=>{
    try {
        //data fetch
        const {name,tags,email}=req.body;
        console.log(name,tags,email);

        const file=req.files.videoFile;

        //validation
        const supportedTypes=['mp4','mov']
        const fileType=file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File format not supported'
            });
        };

        const response=await uploadFileToCloudinary(file, 'Anshul');
        console.log(response);

        //entry on db
        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        });

        res.json({
            success:true,
            image:fileData.imageUrl,
            message:'Video uploaded successfully'
        });

    } catch (error) {
        console.log(`error found ${error}`);
        res.status(400).json({
            success:false,
            message:"something went wrong"
        });
    }
}