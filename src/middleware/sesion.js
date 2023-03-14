"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJWT = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const checkJWT = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(" ")[1];
        const isOk = (0, jwt_handle_1.VerifyToken)(jwt);
        if (!isOk) {
            res.status(401).send({
                message: "Invalid session"
            });
        }
        next();
    }
    catch (e) {
        res.status(400).send("INVALID SESSION");
    }
};
exports.checkJWT = checkJWT;
