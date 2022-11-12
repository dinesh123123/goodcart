// Create user Schema
const mongoose =require("mongoose");
const userSchema=mongoose.Schema({

name:{
           type:String,
           uppercase:true,
           required:true
},
email:{
           type:String,
           required:true,
           lowercase:true
         
},
phone_no:{
           type:Number,
           unique:true,
           required:true
},
image:{
           type:String,
           required:true
},

Types:{
           type:Boolean,
           default:0
},
},{timestaps:true});


module.exports =User=mongoose.model('User',userSchema);