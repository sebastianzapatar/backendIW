import { Request,Response } from "express"
import { handleHttp } from "../utils/error.handle"
/*
Recibir la informacion, se separa la logica del negocio
*/
const getItem=(req:Request,res:Response)=>{
    try{

    }
    catch(e){
        handleHttp(res,'error get blog');
    }
}
const getItems=(req:Request,res:Response)=>{
    
    try{
        
    }
    catch(e){
        handleHttp(res,'error get blog');
    }
}
const postItem=(req:Request,res:Response)=>{
    const {body}=req;
    try{
        
        res.send(body);
    }
    catch(e){
        handleHttp(res,'error post blog');
    }
}
const updateItem=(req:Request,res:Response)=>{
    try{

    }
    catch(e){
        handleHttp(res,'error update blog');
    }
}
const deleteItem=(req:Request,res:Response)=>{
    try{

    }
    catch(e){
        handleHttp(res,'error delete blog');
    }
}
export {getItem,getItems,postItem,updateItem,deleteItem};