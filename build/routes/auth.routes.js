"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const authRouter = (0, express_1.Router)();
authRouter.post('/login', auth_controller_1.HttpLogin);
authRouter.post('/signup', auth_controller_1.HttpSignup);
exports.default = authRouter;
