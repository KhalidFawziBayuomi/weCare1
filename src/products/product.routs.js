import express  from "express";
import * as tools from "./product.controller.js";

const toolsRouter=express.Router()

toolsRouter.route('/')
.post(tools.addTool)
.get(tools.getAllTools)



toolsRouter.route('/filtertools')
.get(tools.getSomeTools)

toolsRouter.route('/:id')
.put(tools.updateTool)
.delete(tools.deleteTool)



export default toolsRouter