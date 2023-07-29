"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.postItem = exports.getItems = exports.getItem = void 0;
const error_handle_1 = require("../utils/error.handle");
/*
Recibir la informacion, se separa la logica del negocio
*/
const getItem = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'error get blog');
    }
};
exports.getItem = getItem;
const getItems = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'error get blog');
    }
};
exports.getItems = getItems;
const postItem = (req, res) => {
    const { body } = req;
    try {
        res.send(body);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'error post blog');
    }
};
exports.postItem = postItem;
const updateItem = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'error update blog');
    }
};
exports.updateItem = updateItem;
const deleteItem = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'error delete blog');
    }
};
exports.deleteItem = deleteItem;
