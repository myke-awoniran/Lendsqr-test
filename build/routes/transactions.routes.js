"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactions_controller_1 = require("../controllers/transactions.controller");
const transactionRouter = (0, express_1.Router)();
transactionRouter.post('/initiate-transfer', transactions_controller_1.HttpInitiateTransfer);
transactionRouter.post('/finalize-transfer', transactions_controller_1.HttpFinalizeTransfer);
exports.default = express_1.Router;
