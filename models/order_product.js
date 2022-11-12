
// create order model schema
const mongoose=require('mongoose');
const orderSchema = new mongoose.Schema({
user_id:{
	type:String,
   required:true,
 },
orderItems:[
{
	name:{type:String,required:true},
	qty:{type:Number,required:true},
	image:{type:String},
	price:{type:Number,required:true},
	product_id:{
	type:String,
    required:true

},
},
],

ShippingAddress:[
{
	address:{type:String,required:true},
	city:{type:String,required:true},
	postalcode:{type:String,required:true},
	country:{type:String,required:true},
},
],

paymentMethod:{
	type:String,
	required:true,
	default:"paypal"
},
paymentResult:{
	id:{type:String},
	status:{type:String},
   updat_time:{type:Date,default:Date.now},
   email_address:{type:String},
},

tax_price:{
	type:Number,
	required:true,
	default:0.0
},

shipping_price:{
	type:Number,
	required:true,
	default:0.0
},
discount_price:{
	type:Number,
	required:true,
	default:0.0
},

total_price:{
	type:Number,
	required:true,
	default:0.0
},

isPaid:{
	type:Boolean,
	required:true,
	default:false
},
PaidAt:{
	type:Date,
	default:Date.now()
},
deleverAt:{
	type:Date,
	default:Date.now()
},	
},{timestamps:true});
module.exports =new mongoose.model("OrderProduct",orderSchema);
