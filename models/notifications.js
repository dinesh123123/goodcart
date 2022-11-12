

// create user location model schema
const mongoose=require('mongoose');
const userNotificationSchema = new mongoose.Schema({
user_id:{
	type:String,
	required:true,

},

title:{         
	type:String,
	required:true
},

description:{         
	type:String,
	required:true
},
status:{         
	type:String
},

},{timestamps:true});
module.exports =new mongoose.model("Notification",userNotificationSchema);