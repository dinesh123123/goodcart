

// create user location model schema
const mongoose=require('mongoose');
const userLocationSchema = new mongoose.Schema({
user_id:{
	type:String,
	required:true,
	unique:true

},
DeleveryAddress:{
complete_address:{         
	type:String,
	required:true
},

land_Mark:{         
	type:String
	
},

pincode:{         
	type:String,
	required:true
},
state_name:{         
	type:String,
	required:true
},

address_location:{         
	type:{type:String},
	coordinates:[]
},
},
},{timestamps:true});
userLocationSchema.indexes({location:"2dsphere"});
module.exports =new mongoose.model("User_Location",userLocationSchema);