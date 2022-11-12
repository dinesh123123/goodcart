
// create product model schema
const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
name:{
	type:String,
	required:true,
},
image:{
	type:String,
	required:true,
},
price:{
	type:Number,
	required:true,
	default:"0"
},
qunatity:{
	type:Number,
	required:true,
	default:"0"
},

Category_Types:{
	type:String,
	required:true
	},


},{timestamps:true});
module.exports =Product= mongoose.model("Product",productSchema);