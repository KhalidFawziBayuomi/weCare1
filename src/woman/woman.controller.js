import  {woman}  from "../../database/models/woman.js"
import { addOne, deleteOne, getAllDocumnts, updateOne } from "../handler/factor.js"
import { catchError } from "../utlis/catchError.js"
import { AppError } from "../utlis/AppError.js"

const addTool=addOne(woman)

const getAllTools=catchError(async(req,res)=>{
    let result=await woman.find()
     res.status(201).json({message:"success",result})
 })
 
 const getSomeTools=catchError(async(req,res,next)=>{
    
    
    let result=await woman.find(req.body)
     result && res.status(201).json({message:"sucess",result})
    
 })


 


const updateTool=updateOne(woman);
const deleteTool=deleteOne(woman);
 

export{
    addTool,
    getAllTools,
    updateTool,
    deleteTool,
    getSomeTools
}