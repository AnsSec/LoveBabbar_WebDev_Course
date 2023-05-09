const express=require('express');

const router=express.Router();

//import controller
const {createTodo}=require('../Controllers/createTodo');
const {getTodo}=require('../Controllers/getTodo');
const {getTodoById}=require('../Controllers/getTodo');
const {updateTodo}=require('../Controllers/updateTodo');

//define Api routes
router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoById);
router.put('/updateTodo/:id',updateTodo);

module.exports=router;