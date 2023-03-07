import { Router} from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware, otroMiddleware } from "../middleware/log";

const router=Router();
//Para crear nuestros get, post, put, delete and patch
/*
locahost:2020/items
*/
router.get('/',[otroMiddleware,logMiddleware],getItems);
router.get('/:id',logMiddleware, getItem);
router.post('/',postItem);
router.delete('/:id',deleteItem);
router.put('/:id',updateItem);
export{router};