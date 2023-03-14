"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ItemScheme = new mongoose_1.Schema({
    color: {
        type: String
    },
    gas: {
        type: String,
        values: ['gas', 'electrico']
    },
    price: {
        type: Number
    },
    year: {
        type: Number
    },
    name: {
        type: String,
    }
}, {
    timestamps: true,
    versionKey: false
});
const ItemModel = (0, mongoose_1.model)('items', ItemScheme);
exports.default = ItemModel;
