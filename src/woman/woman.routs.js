import express  from "express";
import * as woman from "./woman.controller.js";

const womanRouter=express.Router()

womanRouter.route('/')
.post(woman.addTool)
.get(woman.getAllTools)



womanRouter.route('/filtertools')
.get(woman.getSomeTools)

womanRouter.route('/:id')
.put(woman.updateTool)
.delete(woman.deleteTool)



export default womanRouter