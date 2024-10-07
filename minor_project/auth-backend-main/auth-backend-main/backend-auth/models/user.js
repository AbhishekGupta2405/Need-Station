const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "I am genius!!!"
const UserSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  refreshToken:{
      type: String
  }
},{
  timestamps:true
})

UserSchema.methods.generateAccessToken = function() {
  return jwt.sign(
    { _id: this._id, email: this.email },
    JWT_SECRET,  
    { expiresIn: '45m' } 
  );
};
UserSchema.methods.generateRefreshToken = function(){
 return jwt.sign({
    _id: this._id,
    email: this.email
   },
   JWT_SECRET,
   {
     expiresIn: '7d'
   }
  )
}


const User = mongoose.model("User",UserSchema);
module.exports = User;
