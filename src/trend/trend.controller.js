import  {trend}  from "../../database/models/trend.js"
import { addOne, deleteOne, getAllDocumnts, updateOne } from "../handler/factor.js"
import { catchError } from "../utlis/catchError.js"
import { AppError } from "../utlis/AppError.js"

const addTool=addOne(trend)

const getAllTools=catchError(async(req,res)=>{
    let result=await trend.find()
     res.status(201).json({message:"success",result})
 })
 
 const getSomeTools=catchError(async(req,res,next)=>{
    
    
    let result=await trend.find(req.body)
     result && res.status(201).json({message:"sucess",result})
    
 })


 


const updateTool=updateOne(trend);
const deleteTool=deleteOne(trend);
 

export{
    addTool,
    getAllTools,
    updateTool,
    deleteTool,
    getSomeTools
}