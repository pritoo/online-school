import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import 'dotenv/config';
import User from "./models/User.js";

const app= express()
const PORT=process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Online-School')

app.post('/Signup', async (reg,res) => {
    try{
        const newPassword= await bcrypt.hash(req.body.password,10)
        await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:newPassword
        })
        res.json({status:'OK'})
    }catch(err){
        res.json({status:'Error', error:error.message})
    }

})

app.post('/Login', async (reg,res) => {
    const user= User.findOne({email:req.body.email})
    if(!user) return {status:'Error',error:"invalid Login"}
    const isPasswordValid =await bcrypt.compare(req.body.password,user.password)
    if(isPasswordValid){
        const token =jwt.sign(
            {
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email
            },
            'secret123'
        )
      return  res.json({status:'OK',user:token})
    }else{
        return  res.json({status:'error',user:false}) 
    }
}
)

app.listen(PORT,()=> console.log(`server is listing to port ${PORT}`))