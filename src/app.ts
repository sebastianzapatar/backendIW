import 'dotenv/config';
import express, { Request, Response }  from 'express';
import cors from 'cors';
import { router } from './routes/index';
import dbConnect from './config/mongo';
const PORT=process.env.PORT || 8081;//Asigna el puerto 8081
const app=express();
app.use(cors());//Consumido por cualquier origen
app.use(express.json());//Para que coja la aplicacion
app.use(router);
dbConnect().then(()=>console.log("conectado a la base de datos :)") )
app.listen(PORT,()=>
console.log(`Corriendo en localhost:${PORT}`));