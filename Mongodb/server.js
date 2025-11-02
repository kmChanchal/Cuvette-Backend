require('dotenv').config();
const express = require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const userRoutes = require('/routes/users');
const app=express();
app.use(bodyParser.json());
mongoose.connect(`mongodb+srv://chanchalbundela99_db_user:3WscnYAw3vAEPu3S@mern.gmcsevr.mongodb.net/?appName=Mern`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>
console.log('Connected to MongoDB'))
.catch((err)=>{
console.log(err);
});

app.use('/users',userRoutes);
app.get('/',(req,res)=>{
    res.send('Hello from MongoDB server');
});
const PORT=3001;
app.listen(PORT,()=>{   
    console.log(`MongoDB server is running on port ${PORT}`);
});
