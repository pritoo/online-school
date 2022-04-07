import mongoose from "mongoose";

const User= new mongoose.Schema({
    firstName:{type:String,required:true},
    LastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    
},
{
    collection:"users"
}
)
export default mongoose.model('userData',User)