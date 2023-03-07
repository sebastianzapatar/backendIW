import { Router,Request,Response } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";

const router=Router();
//Para crear nuestros get, post, put, delete and patch
/*
locahost:2020/items
*/
router.get('/',getItems);
router.get('/:id',getItem);
router.post('/',postItem);
router.delete('/:id',deleteItem);
router.put('/:id',updateItem);
export{router};