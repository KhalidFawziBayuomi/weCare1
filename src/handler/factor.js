import { AppError } from "../utlis/AppError.js"
import { catchError } from "../utlis/catchError.js"
import { toolsModel } from "../../database/models/products.js"

export const addOne=(model)=>{
    return catchError(async(req,res,next)=>{
        let nurse=await toolsModel.findOne({tradeMark:req.body.tradeMark})
    if(nurse)return res.status(409).json({message:"already exists"}) 
        const document=new model(req.body)
        await document.save()
        res.status(201).json({message:"success",document})
    })
}

export const deleteOne=(model)=>{
    return catchError(async(req,res,next)=>{
        const{id}=req.params
       
        const document=await model.findByIdAndDelete(id)
         !document && next(new AppError('document not found',404))
         document && res.status(201).json({message:"sucess",document})
     })
}
export const updateOne=(model)=>{
    return catchError(async(req,res,next)=>{
        const{id}=req.params
        const{name}=req.body
        let document=await model.findByIdAndUpdate(id,req.body,{new:true})
        !document && next(new AppError('document not found',404))
         document && res.status(201).json({message:"sucess",document})
     })
    }

export const getAllDocumnts=(model)=>{
    return catchError(async(req,res)=>{
        let documents=await model.find()
         res.status(201).json({message:"success",documents})
     })
}

