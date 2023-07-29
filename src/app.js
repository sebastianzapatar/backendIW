"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./routes/index");
const mongo_1 = __importDefault(require("./config/mongo"));
const PORT = process.env.PORT || 8081; //Asigna el puerto 8081
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); //Consumido por cualquier origen
app.use(express_1.default.json()); //Para que coja la aplicacion
app.use(index_1.router);
(0, mongo_1.default)().then(() => console.log("conectado a la base de datos :)"));
app.listen(PORT, () => console.log(`Corriendo en localhost:${PORT}`));
