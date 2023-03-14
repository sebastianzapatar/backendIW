"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserScheme = new mongoose_1.Schema({
    name: {
        type: String
    },
    description: {
        type: String,
        values: ['gas', 'electrico']
    },
    password: {
        type: String,
        default: 'hola :)'
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true,
    versionKey: false
});
const UserModel = (0, mongoose_1.model)('users', UserScheme);
exports.default = UserModel;
