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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = exports.registerUserService = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcript_handle_1 = require("../utils/bcript.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const registerUserService = (authUser) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, description, name } = authUser;
    console.log(password);
    const exist = yield user_model_1.default.findOne({ email });
    if (exist) {
        return "Already exist";
    }
    const passwordEncrypt = yield (0, bcript_handle_1.encrypt)(password);
    const newUser = yield user_model_1.default.create({ email, password: passwordEncrypt, name, description });
    return newUser;
});
exports.registerUserService = registerUserService;
const loginUserService = (authUser) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = authUser;
    console.log(authUser);
    const userPass = yield user_model_1.default.findOne({ email });
    if (!userPass) {
        return 'User not exist';
    }
    const passwordHash = userPass.password;
    console.log(passwordHash);
    const isCorrect = yield (0, bcript_handle_1.verify)(password, passwordHash);
    console.log(isCorrect);
    if (!isCorrect) {
        return 'Wrong password';
    }
    const token = yield (0, jwt_handle_1.singToken)(email);
    const data = { token: token,
        user: {
            email: userPass.email,
            name: userPass.name,
            description: userPass.description
        },
    };
    console.log(token);
    return data;
});
exports.loginUserService = loginUserService;
