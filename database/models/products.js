import {Schema,model} from "mongoose";

const toolsSchema=new Schema({
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
     color:{
        type:String,
        required:true
    },
     size:{
        type:String,
        required:true
    },
    qty:{
        type:String,
        required:true
    },
    
    

   
},{timestamps:true})

export const toolsModel=model('tools',toolsSchema)
