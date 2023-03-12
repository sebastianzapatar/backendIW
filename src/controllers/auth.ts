import { Request,Response } from "express"
import { loginUserService, registerUserService } from "../services/auth.service";

import { User } from "../interfaces/user.interface";
import { Auth } from "../interfaces/auth.interface";

const loginUser=async(req:Request,res:Response)=>{
    const userAuth:Auth=req.body;

    const responseUser=await loginUserService(userAuth);
    if(responseUser==='Wrong password'){
        res.status(403).send({message:responseUser})
    }else{
        res.send(responseUser);
    }
    
}
const registerUser=async(req:Request,res:Response)=>{
    const auth:User=req.body;
    const {name,password,email,description}=auth;
    const registerUser=await registerUserService(auth);
    res.status(200).send(registerUser);
}
export {loginUser,registerUser};