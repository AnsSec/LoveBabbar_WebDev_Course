//import the schema module
const Todo = require('../Models/Todo');

//define route handler

exports.getTodo=async(req,res)=>{
    try{
        //fetch all todo items from database
        const todos=await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:'entire todo data is fetch'

        })
    }
    catch(err){
        console.error(err)
        res.status(500)
        .json({
            success:true,
            error:err.message,
            message:'server error'

        })
    }
}

exports.getTodoById=async(req,res)=>{
    try{
        //extract todo items by id
        const id=req.params.id;
        const todo = await Todo.findById({_id: id})

        //data for given id not found
        if(!todo){
            res.status(404)
            .json({
                success:false,
                message:'No data found with id'
    
            })
        }
        //data for given id found
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`todo ${id} data successfully fetched`

        })
    }
    catch(err){
        console.error(err)
        res.status(500)
        .json({
            success:true,
            error:err.message,
            message:'server error'

        })
    }
}