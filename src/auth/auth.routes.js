
import express  from "express";
import * as auth from "./auth.controller.js";

const authRouter=express.Router()

authRouter.post('/signup',auth.signUp)
authRouter.post('/signin',auth.signIn)
authRouter.get('/signin/showuser',auth.getAllUserSignIn)

export default authRouter