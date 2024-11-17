import mongoose from "mongoose";


// creating schema , as what would be store in the database
// requroed means, the u can't ignore the field, unique means u have to enter the unique names or else to the fields.
// timestamps will store the time of creation and updation of the user.
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
}, {timestamps:true})

// creating model for this schema
// "User"  this is the name of the model
const User = mongoose.model("User", userSchema);

export default User ;