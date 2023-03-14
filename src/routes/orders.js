"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const orders_1 = require("../controllers/orders");
const sesion_1 = require("../middleware/sesion");
/*
Esta ruta solo puede acceder las personas activa
personas que tengan un jwt valido
*/
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', sesion_1.checkJWT, orders_1.getItems);
