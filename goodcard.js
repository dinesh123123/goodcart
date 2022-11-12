
// import dependancies in app.js fiel

const express=require("express");
const goodcard=express();
const user_routes=require("./routes/user_routes");


//setup routes
goodcard.use("/api",user_routes);


//error handler
 goodcard.use((err,req,res,next)=>{res.status(404).json({
        error:'bad request'})
 });


module.exports =goodcard;