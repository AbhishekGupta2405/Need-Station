const jwt = require("jsonwebtoken")
const userModel = require('../models/user');

const verifyJWT = async(req,res,next)=>{
    try{
 const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
    if(!token){
        res.status(401)
        .json({
            msg: "Unauthorized request "
        })
    }
    const decodedToken = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

    //console.log("decoded token = ",decodedToken);
   
    const user = await userModel.findById(decodedToken?._id).select("-password -refreshToken")

    //console.log("user in verifyJWT= ", user);
      
    if(!user){
        //discussion
        res.status(401).json({msg:"invalid access token"})
    }
        req.user = user;
        next()

    } catch(error){
         res.status(401).json({
            error:error
         })
    
    }
}

module.exports = {
    verifyJWT
}










