// import dependancies in controllers js files
const User=require("../models/user_models");
const Otp=require("../models/user_otp");
const User_Location=require("../models/user_location_models");
const Notification=require("../models/notifications");
const CreateCart=require("../models/create_cart");
const otpGenerator =require('otp-generator');




// create Register api using post method
const User_Signup=async(req,res)=>{
	const {name,email,phone_no,Types}=req.body;
	const Register_user= await User.findOne({email:email});
	if(Register_user){
	 res.send({sucess:false,message:"You are allready registered,Please go to login page"});
	}else{
		if(name && email && phone_no ){
				try{
					
				const user=new User({name,email, phone_no, Types,image:req.file.filename})
				const user_data=await user.save()
	res.status(200).json({sucess:true,message:"Your are Register sucessfully",user_data:user_data})
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"Your are not Register Please try to again"})
}

		}else{
		res.send({sucess:false,message:"all inputs are required"});
	}
}
};



//get user details data using get method
const GetUser_Details=async(req,res)=>{
	const id=req.params._id;
	try{
		const userData=await User.findById(id);
		res.status(200).json({sucess:true,message:"user data are",data:userData})

	}catch(error){
		res.status(400).json({sucess:false,msg:error.message})
	}

};




// create update profile data
 const UpdateProfileData=async(req,res)=>{
try {
    const id=req.params._id;
   if(req.file){
    var profileRecord={
        name:req.body.name,
        email:req.body.email,
        phone_no:req.body.phone_no,
        Types:req.body.Types,
        image:req.file.filename
    }

   }else{
var profileRecord={
        name:req.body.name,
        email:req.body.email,
        phone_no:req.body.phone_no,
        Types:req.body.Types 
    }
   }
   var profile=await User.findByIdAndUpdate(id,(profileRecord));
       res.status(201).json({ success: true, message: "profile updated successful", profile_update:profile}) 
}catch(error){
	res.status(400).json({sucess:false,message:"user profile data does not updated"})
console.log(error.message);
}
  };
     




 
  //create mobile number otp during login time
 const User_Login =async(req,res)=>{
 	const phone_no =req.body.phone_no;

 	try{
 		if(phone_no){
 			const user = await User.findOne({phone_no:phone_no});
 			if(user != null){
 				//otp generate
const OTP =otpGenerator.generate(4,{digits:true,upperCaseAlphabets: false, specialChars:false,lowerCaseAlphabets:false});
const otp =new Otp ({phone_no:phone_no,otp:OTP});
const result =await otp.save();
res.status(200).send({result:true,msg:'otp send sucessfully',otp:result})
}else{
res.send({sucess:false,message:" correct phone number is required"})
}
 			}else{
 				res.send({sucess:false,message:"You are not login,Please go to register page"});
 			}

 		}
 		catch(error){
 			console.log(error.message)
 			res.status(400).json({sucess:false,message:"Your are not login"})
 		}
 	};



// verify otp created api in nodejs
//verif otp
const verifyOtp =async(req,res)=>{
	const {phone_no,otp}=req.body;
	const otpHolder =await Otp.find({phone_no,otp})
	if(otpHolder.length>0){
		res.status(200).send({
			sucess:true,
			msg:"login sucessfully",
			data:otpHolder
		})
	}
	else{
		return res.status(201).send({sucess:true,msg:"your otp was worng"})
	}
};





//create user location api with late long
const UserLocationInsert_Method=async(req,res)=>{
	
	try{
		const user_location={complete_address,pincode,state_name,land_Mark}=req.body;
        const addressLocation =new User_Location({user_id:req.body.user_id,DeleveryAddress:
        	{complete_address,pincode,state_name,land_Mark,address_location:{
    		type:"Point",
  		coordinates:[parseFloat(req.body.longitude),parseFloat(req.body.lettitude)]
  }

}
});
        const user_location_data = await addressLocation .save();
        res.status(201).json({sucess:true,message:"address location insert sucessfully",adress_data:user_location_data});

	}catch(error){
		console.log(error.message)
 		res.status(400).json({sucess:false,message:"Does not valid user_id",msg:error.message})

	}

};






//create address update api 
 const AddressUpdate= async(req,res)=>{
    try{
    	const addressData={user_id,complete_address,pincode,state_name,land_Mark}=req.body;

    	const location=await User_Location.findOne({user_id:user_id});
    if(location) {

   const Address_data= await User_Location.findOneAndUpdate({user_id:req.body.user_id},{$set:{complete_address,pincode,state_name,land_Mark,
 	DeleveryAddress:
        	{complete_address,pincode,state_name,land_Mark,address_location:{
    		type:"Point",
  		coordinates:[parseFloat(req.body.longitude),parseFloat(req.body.lettitude)]
  }

}}},
{new:true});
     
   res.send({success:true, message: "Address updated successfully.",user_data:Address_data })
       
    }else{
    	const addressLocation =new User_Location({
    		user_id:req.body.user_id,DeleveryAddress:
        	{complete_address,pincode,state_name,land_Mark,address_location:{
    		type:"Point",
  		coordinates:[parseFloat(req.body.longitude),parseFloat(req.body.lettitude)]
  }

}
});
        const user_location_data = await addressLocation .save();
        res.status(201).json({sucess:true,message:"address location insert sucessfully",adress_data:user_location_data});

    }
}catch(error){
    res.status(500).send({success:false,message:"updated error id "  + req.params._id, msg:error.message});
}

};




//Create User Notification api
const UserNotificationApi=async(req,res)=>{
	try{
		 const notificationData={user_id,title,status,description}=req.body;
              const notification =new Notification({user_id,title,status,description		
  });
             const user_notification = await notification.save();
             res.status(201).json({sucess:true,message:"user notification insert sucessfully",notification:user_notification});
  
}catch(error){
            res.status(500).send({success:false,message:"notification error id "  + req.params._id, msg:error.message});
        }
};




//Create user notification list api
const NotificationListApi=async(req,res)=>{
	try{
    const notification_list= await Notification.find({user_id:"636a16ace5205b90967bc6f3"});
    if(notification_list!= null){
    	res.status(200).json({sucess:true,message:" notification_list lists are",notification_list:notification_list})
    }else{
    	res.send({sucess:false,message:"notification data does not found"})
    }
	
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"notification list does not upload"})
  }		

};



//Create  addCart api
const CreateCartApi=async(req,res)=>{
	try{
	const  cart={user_id,price,product_id,quantity,total_price}=req.body;
    const addcart=new CreateCart({user_id,price,product_id,quantity,total_price})
	const addcart_data=await addcart.save()
	res.status(200).json({sucess:true,message:"addcart data insert sucessfully",cart:addcart_data})
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"cart details does not upload"})
  }		
};





module.exports ={
User_Signup,
User_Login,
verifyOtp,
UpdateProfileData,
UserLocationInsert_Method,
GetUser_Details,
AddressUpdate,
UserNotificationApi,
NotificationListApi,
CreateCartApi 
};