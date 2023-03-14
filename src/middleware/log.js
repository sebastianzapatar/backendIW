"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otroMiddleware = exports.logMiddleware = void 0;
const logMiddleware = (req, res, next) => {
    console.log("Comenzando log middleware...");
    next();
    console.log("Finalizando log middleware...");
};
exports.logMiddleware = logMiddleware;
const otroMiddleware = (req, res, next) => {
    console.log("Comenzando log middleware...2");
    next();
    console.log("Finalizando log middleware...2");
};
exports.otroMiddleware = otroMiddleware;
