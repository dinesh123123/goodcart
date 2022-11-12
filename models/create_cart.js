// Create user Schema
const mongoose =require("mongoose");
const CartSchema=mongoose.Schema({

user_id:{
           type:String,
           required:true
},
product_id:{
           type:String,
           required:true
          
},
quantity:{
           type:Number,
           required:true
},
price:{
           type:Number,
           required:true
},

total_price:{
           type:Number,
           default:0
},
},{timestaps:true});


module.exports =User=mongoose.model('CreateCart',CartSchema);