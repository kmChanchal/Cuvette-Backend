const express=require('express');
const { Session } = require('inspector/promises');
const app=express();
const path=require('path');
//const morgan=require('morgan');
//app.use(morgan('dev'));
//app.get('/',(req,res)=>{
   // res.send('Hello World');
//});
//app.listen(3000,()=>{
    //console.log('Server is running on port 3000');
//});

app.use(Session({
    secret:'your_secret_key',
    resave:false,
    saveUninitialized:true,
    cookie{
        maxAge:1000*60*60 //1 hour
        httpOnly:true,
        secure:process.env.NODE_ENV==='production',
    }
}))