import {Schema,model} from "mongoose";

const accessoriesSchema=new Schema({
    name:{
        type:String,
       
        trim:true,
    },
       
   
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    }
    
    

   
},{timestamps:true})

export const accessories=model('accessories',accessoriesSchema)
