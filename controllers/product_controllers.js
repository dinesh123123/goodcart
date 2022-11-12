// import dependancies in controllers js files
const Product=require("../models/product_models");
const OrderProduct=require("../models/order_product");



// create product  api using post method
const ProductMethod=async(req,res)=>{
	try{
	const {name,price,Category_Types,quantitiy}=req.body;
    const product=new Product({name,price,Category_Types,quantitiy,image:req.file.filename})
	const product_data=await product.save()
	res.status(200).json({sucess:true,message:"product details uploaded",product:product_data})
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"product details does not upload"})
  }		
};



// product list api using get method
const ProductList=async(req,res)=>{
	try{
    const product= await Product.find();
    if(product != null){
    	res.status(200).json({sucess:true,message:"product lists are",product_list:product})
    }else{
    	res.send({sucess:false,message:"product data does not found"})
    }
	
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"product list does not upload"})
  }		
};





//create Festive needs list api using get method
const FestiveNeedsList=async(req,res)=>{
	try{
    const festive_product_list= await Product.find({Category_Types:"Festive Needs"});
    if(festive_product_list!= null){
    	res.status(200).json({sucess:true,message:" festive product lists are",festive_product_list:festive_product_list})
    }else{
    	res.send({sucess:false,message:"product data does not found"})
    }
	
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"product list does not upload"})
  }		
};




//create Festive needs list api using get method
const FruitsList=async(req,res)=>{
	try{
    const fruits_product_list= await Product.find({Category_Types:"Fruits"});
    if(fruits_product_list!= null){
    	res.status(200).json({sucess:true,message:" fruits product lists are",fruits_product_list:fruits_product_list})
    }else{
    	res.send({sucess:false,message:"product data does not found"})
    }
	
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"product list does not upload"})
  }		
};





//create Festive needs list api using get method
const HealthyBitesList=async(req,res)=>{
	try{
    const healthy_product_list= await Product.find({Category_Types:"Healthy Bites"});
    if(healthy_product_list!= null){
    	res.status(200).json({sucess:true,message:" healthyproduct lists are",healthy_product_list:healthy_product_list})
    }else{
    	res.send({sucess:false,message:"product data does not found"})
    }
	
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"product list does not upload"})
  }		
};





//create Festive needs list api using get method
const MicrogreensProductList=async(req,res)=>{
	try{
    const microgreens_product_list= await Product.find({Category_Types:"Microgreens"});
    if(microgreens_product_list!= null){
    	res.status(200).json({sucess:true,message:" microgreens product lists are",microgreens_product_list:microgreens_product_list})
    }else{
    	res.send({sucess:false,message:"product data does not found"})
    }
	
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"product list does not upload"})
  }		
};




//create Festive needs list api using get method
const MilletsFlourProductList=async(req,res)=>{
	try{
    const milletsFlour_product_list= await Product.find({Category_Types:"Millets Flour"});
    if(milletsFlour_product_list!= null){
    	res.status(200).json({sucess:true,message:" milletsFlour product lists are",milletsFlour_product_list:milletsFlour_product_list})
    }else{
    	res.send({sucess:false,message:"product data does not found"})
    }
	
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"product list does not upload"})
  }		
};




//create Festive needs list api using get method
const SproutsList=async(req,res)=>{
	try{
    const sprouts_product_list= await Product.find({Category_Types:"Sprouts"});
    if(sprouts_product_list!= null){
    	res.status(200).json({sucess:true,message:" sprouts product lists are",sprouts_product_list:sprouts_product_list})
    }else{
    	res.send({sucess:false,message:"product data does not found"})
    }
	
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"product list does not upload"})
  }		
};




//create Festive needs list api using get method
const TravelBoxList=async(req,res)=>{
	try{
    const travel_box_product_list= await Product.find({Category_Types:"Travel Box"});
    if(travel_box_product_list!= null){
    	res.status(200).json({sucess:true,message:" travel_box product lists are",travel_box_product_list:travel_box_product_list})
    }else{
    	res.send({sucess:false,message:"product data does not found"})
    }
	
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"product list does not upload"})
  }		
};




//create Festive needs list api using get method
const VegetablesProductList=async(req,res)=>{
	try{
    const vegetables_product_list= await Product.find({Category_Types:"Vegetables"});
    if(vegetables_product_list!= null){
    	res.status(200).json({sucess:true,message:" vegetables product lists are",vegetables_product_list:vegetables_product_list})
    }else{
    	res.send({sucess:false,message:"product data does not found"})
    }
	
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"product list does not upload"})
  }		
};





//product ordermethod creating api in product controllers file
 const OrderProductMethod =async(req,res)=>{
 	try{
 		
    const order_product=new OrderProduct({
    	user_id:req.body.user_id,
    	orderItems:[
    	{
    		name:req.body.name,
    		image:req.body.image,
    		price:req.body.	price,
    		qty:req.body.qty,
    		product_id:req.body.product_id

    	},
    	],
    	ShippingAddress:[
    	{
	 address:req.body.address,
	 city:req.body.city,
	 postalcode:req.body.postalcode,
	 country:req.body.country,
},
],

    	paymentMethod:req.body.paymentMethod,
    	paymentResult:{
    		id:req.body.id,
    		status:req.body.status,
    		updat_time:req.body.updat_time,
    		email_address:req.body.email_address
    	},
    	tax_price:req.body.tax_price,
    	shipping_price:req.body.shipping_price,
    	discount_price:req.body.discount_price,
    	total_price:req.body.total_price,
    	isPaid:req.body.isPaid,
    	PaidAt:req.body.PaidAt,
    	deleverAt:req.body.deleverAt
    })
	const order_product_data=await order_product.save()
	res.status(200).json({sucess:true,message:"Your order sucessfully",order_product:order_product_data})

 		}catch(error){
 			console.log(error.message)
	res.status(200).json({sucess:false,message:"Your order is not sucess"})	

 		}

 }; 




// create Orderproduct history
const OrderProductHistory=async(req,res)=>{
	try{
    const order_history= await OrderProduct.find({user_id:"636a25b14e0593939739c41e"});
    if(order_history!= null){
    	res.status(200).json({sucess:true,message:" order_history lists are",order_history:order_history})
    }else{
    	res.send({sucess:false,message:"order_history data does not found"})
    }
	
	}catch(error){
		console.log(error.message)
	res.status(200).json({sucess:false,message:"order_history list does not upload"})
  }		

};




//create search api  on the base of product name and category types

const ProductSearchApi=async(req,res)=>{
	try{
		const data =req.params.key;
      const data_name=await Product.find(
                
    {"$or":[
    {"name":{$regex:".*"+data+".*",$options:"i"}},
      {"Category_Types":{$regex:".*"+data+".*",$options:"i"}} 
      ]
      }
      
      )    
//check condition
            if(data_name.length>0){
                res.status(200).send({sucess:true,msg:"your result are",result:data_name});
            }else{
              res.status(200).send({
                success:true,
                msg:"result is not found"
              })  
            }
        }catch(error){
            res.status(400).send({sucess:false,msg:error.message});
        }
        };
    


// create add to cart api
	




module.exports ={
	ProductMethod,
	ProductList,
	OrderProductMethod,
	OrderProductHistory,
	FestiveNeedsList,
	FruitsList,
	HealthyBitesList,
	MicrogreensProductList,
	MilletsFlourProductList,
	SproutsList,
	TravelBoxList,
	VegetablesProductList,
	ProductSearchApi

};