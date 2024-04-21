import  {userModel}  from "../../database/models/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const catchError=(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch()
    }
}

const getAllUserSignIn=catchError(async(req,res)=>{
    
    let user=await userModel.find()
     res.status(201).json({message:"success",user})
 });

 const signUp=catchError(async(req,res,next)=>{
    let isUser=await userModel.findOne({email:req.body.email})
    if(isUser)return res.status(409).json({message:"already exists"})
    const user=new userModel(req.body)
   

    await user.save()
    let token=jwt.sign({email:user.email,name:user.name,id:user._id,role:user.role},'khalid')
   

   
res.status(201).json({message:"success",token,user})

})



const signIn=catchError(async(req,res,next)=>{
    const {email,password}=req.body
    let user=await userModel.findOne({email:req.body.email})

    if(user && bcrypt.compareSync(password,user.password)){
        let token=jwt.sign({email:user.email,name:user.name,id:user._id,role:user.role},'khalid')
        res.status(201).json({message:"success",token,email,password})
    }else{
        return res.status(409).json({message:"incorrect khalid or password"}) 
    }
   
})


 


export{
    signUp,
    signIn,
    getAllUserSignIn
}
