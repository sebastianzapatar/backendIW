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
exports.registerUser = exports.loginUser = void 0;
const auth_service_1 = require("../services/auth.service");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userAuth = req.body;
    const responseUser = yield (0, auth_service_1.loginUserService)(userAuth);
    if (responseUser === 'Wrong password') {
        res.status(403).send({ message: responseUser });
    }
    else {
        res.send(responseUser);
    }
});
exports.loginUser = loginUser;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const auth = req.body;
    const { name, password, email, description } = auth;
    const registerUser = yield (0, auth_service_1.registerUserService)(auth);
    res.status(200).send(registerUser);
});
exports.registerUser = registerUser;
