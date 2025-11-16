const express = require('express');
const router=express.Router();
router.get('/',(req, res)=>{
    res.send('Hello World Prody');  

})
router.get('/:id', (req, res) =>
    res.send(`Hello World Products! ${req.params.id}`)
);
router.post('/',(req,res)=>{
    res.send('Hello World From Products');
});
router.post('/:id',(req,res)=>{
    res.json(req.body);
})
module.exports=router;
