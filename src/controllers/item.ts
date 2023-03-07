import { Request,Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { getCars, insertCar,getCar, deleteCar, updateCar} from "../services/item.service";
/*
Recibir la informacion, se separa la logica del negocio
*/
const getItem=async(req:Request,res:Response)=>{
    try{
        const id=req.params.id;
        const response=await getCar(id);
        const data=response?response:'NOT_FOUND';
        res.status(200).send(data);

    }
    catch(e){
        handleHttp(res,'error get item');
    }
}
const getItems=async (req:Request,res:Response)=>{
    
    try{
        const response=await getCars();
        res.status(200).send(response);

    }
    catch(e){
        handleHttp(res,'error get items');
    }
}
const postItem=async(req:Request,res:Response)=>{
    
    try{
        console.log(req.body);
        const responseItem=await insertCar(req.body);
        res.send(responseItem);
    }
    catch(e){
        handleHttp(res,'error post item');
    }
}
const updateItem=async(req:Request,res:Response)=>{
    try{
        const {body}=req;
        const id=req.params.id;
        const response=await updateCar(id,body);
        res.status(200).send(response);
    }
    catch(e){
        handleHttp(res,'error update item');
    }
}
const deleteItem=async (req:Request,res:Response)=>{
    try{
        const id=req.params.id;
        const response=await deleteCar(id);
        res.status(200).send(response);
    }
    catch(e){
        handleHttp(res,'error delete items');
    }
}
export {getItem,getItems,postItem,updateItem,deleteItem};