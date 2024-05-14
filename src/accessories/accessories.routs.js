import express  from "express";
import * as accessories from "./accessories.controller.js";

const accessoriesRouter=express.Router()

accessoriesRouter.route('/')
.post(accessories.addTool)
.get(accessories.getAllTools)



accessoriesRouter.route('/filtertools')
.get(accessories.getSomeTools)

accessoriesRouter.route('/:id')
.put(accessories.updateTool)
.delete(accessories.deleteTool)



export default accessoriesRouter