import  {accessories}  from "../../database/models/accessories.js"
import { addOne, deleteOne, getAllDocumnts, updateOne } from "../handler/factor.js"
import { catchError } from "../utlis/catchError.js"
import { AppError } from "../utlis/AppError.js"

const addTool=addOne(accessories)

const getAllTools=catchError(async(req,res)=>{
    let result=await accessories.find()
     res.status(201).json({message:"success",result})
 })
 
 const getSomeTools=catchError(async(req,res,next)=>{
    
    
    let result=await accessories.find(req.body)
     result && res.status(201).json({message:"sucess",result})
    
 })


 


const updateTool=updateOne(accessories);
const deleteTool=deleteOne(accessories);
 

export{
    addTool,
    getAllTools,
    updateTool,
    deleteTool,
    getSomeTools
}