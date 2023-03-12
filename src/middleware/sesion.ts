import { NextFunction,Request,Response } from "express";
import { VerifyToken } from "../utils/jwt.handle";

const checkJWT=(req:Request,res:Response,next:NextFunction)=>{
    
    try{
        const jwtByUser=req.headers.authorization||'';
        const jwt=jwtByUser.split(" ")[1];
        const isOk=VerifyToken(jwt);
        if(!isOk){
            res.status(401).send({
                message:"Invalid session"
            })
        }
        
        next();

    }
    catch(e){
        res.status(400).send("INVALID SESSION")
    }
}
export {checkJWT};