import  {toolsModel}  from "../../database/models/products.js"
import { addOne, deleteOne, getAllDocumnts, updateOne } from "../handler/factor.js"
import { catchError } from "../utlis/catchError.js"
import { AppError } from "../utlis/AppError.js"

const addTool=addOne(toolsModel)

const getAllTools=catchError(async(req,res)=>{
    let result=await toolsModel.find()
     res.status(201).json({message:"success",result})
 })
 
 const getSomeTools=catchError(async(req,res,next)=>{
    
    
    let result=await toolsModel.find(req.body)
     result && res.status(201).json({message:"sucess",result})
    
 })


 


const updateTool=updateOne(toolsModel);
const deleteTool=deleteOne(toolsModel);
 

export{
    addTool,
    getAllTools,
    updateTool,
    deleteTool,
    getSomeTools
}