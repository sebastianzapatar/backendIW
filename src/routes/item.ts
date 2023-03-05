import { Router,Request,Response } from "express";

const router=Router();
//Para crear nuestros get, post, put, delete and patch
/*
locahost:2020/items
*/
router.get('/',(req:Request,res:Response)=>{
    res.send({
        data:'aqui van los modelos'
    })
})
export{router};