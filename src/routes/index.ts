import { Router } from "express";
import {readdirSync} from 'fs';

const PATH_ROUTER=`${__dirname}`
const router=Router();

const cleanFileName=(filName:string)=>{
    const file=filName.split('.').shift();
    return file;
}
readdirSync(PATH_ROUTER).filter((filName)=>{
    const cleanName=cleanFileName(filName);
    if(cleanName!=='index'){
        import (`./${cleanName}`).then((moduleRouter)=>{
            console.log(`Se esta cargando la ruta`);
            router.use(`/${cleanName}`,moduleRouter.router);
        })
        
    }
    
})
export {router};