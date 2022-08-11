"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_controller_1 = require("../controllers/auth.controller");
const userRouter = (0, express_1.Router)();
userRouter.get('/my-profile', auth_controller_1.HttpProtectRoute, user_controller_1.HttpGetUserProfile);
exports.default = userRouter;
