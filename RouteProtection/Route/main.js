const express=require('express');
const router=express.Router();  
const isAuthenticated=require('../middleware/auth');
const requestLogger=require('../middleware/logger');
router.use(isAuthenticated);    
router.use(requestLogger);
router.get('/',(req,res)=>{
    res.send({message:'Welcome to the Main Route'});
    });
router.get('/profile',(req,res)=>{
    res.send({message:'User Profile Page'});
}   );
router.get('/dashboard', (req, res) => {
    res.send({message:'User Dashboard Page'});
});

module.exports=router;