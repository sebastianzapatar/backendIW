
import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getOrders } from "../services/orders.service";


const getItems=async (req:Request,res:Response)=>{
    
    try{
        const response=await getOrders();
        res.status(200).send(response);

    }
    catch(e){
        handleHttp(res,'error get items');
    }
}
export {getItems};