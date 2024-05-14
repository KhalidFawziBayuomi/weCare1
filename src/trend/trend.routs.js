import express  from "express";
import * as trend from "./trend.controller.js";

const trendRouter=express.Router()

trendRouter.route('/')
.post(trend.addTool)
.get(trend.getAllTools)



trendRouter.route('/filtertools')
.get(trend.getSomeTools)

trendRouter.route('/:id')
.put(trend.updateTool)
.delete(trend.deleteTool)



export default trendRouter