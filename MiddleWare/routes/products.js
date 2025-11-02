const express=require('express');
const router=express.Router();

// Sample product data
router.get('/',(req,res)=>{
    res.send('Hello World ${req.params.id}');
});
router.post('/',(req,res)=>{
    res.send(req.body);