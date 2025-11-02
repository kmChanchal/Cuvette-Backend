const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type: String,
        maxlength:50,
        trim:true,
    },
    email:{
        type: String, required: true, unique: true 
    },
    age:{
        type:Number,
        trim:true,
        min:18,
        max:80,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
}
});
const User=mongoose.model('User',userSchema);
module.exports=User;


