const express=require('express');

const router=express.Router();

//import controller
const {createTodo}=require('../Controllers/createTodo');
const {getTodo}=require('../Controllers/getTodo');
const {getTodoById}=require('../Controllers/getTodo');
const {updateTodo}=require('../Controllers/updateTodo');
const {deleteTodo}=require('../Controllers/deleteTodo');

//define Api routes
router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoById);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo);


module.exports=router;