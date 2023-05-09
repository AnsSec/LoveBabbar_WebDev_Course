//import the schema module
const Todo = require('../Models/Todo');

//define route handler
exports.deleteTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        await Todo.findByIdAndDelete(id);
        res.json(200)
        .json({
            success:true,
            message:"Todo delete",
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
        {
            success:false,
            data:"internal Server Error",
            message:err.message,
        }
        )
    }
}
