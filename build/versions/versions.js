"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const transactions_routes_1 = __importDefault(require("../routes/transactions.routes"));
const version_1 = (0, express_1.Router)();
version_1.use('/auth', auth_routes_1.default);
version_1.use('/users', user_routes_1.default);
version_1.use('/transactions', transactions_routes_1.default);
exports.default = version_1;
