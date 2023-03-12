import { Router} from "express";
import { getItems } from "../controllers/orders";
import { checkJWT } from "../middleware/sesion";


/*
Esta ruta solo puede acceder las personas activa
personas que tengan un jwt valido
*/
const router=Router();
router.get('/',checkJWT,getItems);
export {router};