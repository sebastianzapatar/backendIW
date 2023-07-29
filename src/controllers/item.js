"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.postItem = exports.getItems = exports.getItem = void 0;
const error_handle_1 = require("../utils/error.handle");
const item_service_1 = require("../services/item.service");
/*
Recibir la informacion, se separa la logica del negocio
*/
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield (0, item_service_1.getCar)(id);
        const data = response ? response : 'NOT_FOUND';
        res.status(200).send(data);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'error get item');
    }
});
exports.getItem = getItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, item_service_1.getCars)();
        res.status(200).send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'error get items');
    }
});
exports.getItems = getItems;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const responseItem = yield (0, item_service_1.insertCar)(req.body);
        res.send(responseItem);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'error post item');
    }
});
exports.postItem = postItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const id = req.params.id;
        const response = yield (0, item_service_1.updateCar)(id, body);
        res.status(200).send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'error update item');
    }
});
exports.updateItem = updateItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield (0, item_service_1.deleteCar)(id);
        res.status(200).send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'error delete items');
    }
});
exports.deleteItem = deleteItem;
