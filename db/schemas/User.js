const mangoose = require("mongoose")
const { Schema } = mangoose;

const userSchema = new Schema({
  
//   userName:String,
    email:{
      unique:true,
        type:String,
      required:true
    },
//   name:String,
    password:
    {
        type:String,
        required:true
    },
 
});

const User = mangoose.model('User',userSchema)

module.exports=User;