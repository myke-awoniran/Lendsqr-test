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
exports.HttpGetUsers = exports.HttpProtectROute = exports.HttpLogin = exports.HttpSignup = void 0;
const user_services_1 = require("../services/user.services");
const operational_error_1 = require("../exceptions/operational.error");
const create_user_dtos_1 = require("../dtos/create-user.dtos");
const response_dtos_1 = require("../dtos/response.dtos");
const existing_user_helper_1 = require("../helpers/existing-user.helper");
const token_helper_1 = require("../helpers/token.helper");
// CONTROLLER FOR  SIGNING USER UP
function HttpSignup(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (yield (0, existing_user_helper_1.ExistingUser)(req.body.email))
                return next(new operational_error_1.X('account already exist', 409));
            req.body.password = yield (0, token_helper_1.createHash)(req.body.password);
            const user = yield user_services_1.Users.create(req.body);
            return (0, response_dtos_1.serverResponse)(res, 201, user);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.HttpSignup = HttpSignup;
// CONTROLLER FOR LOGGING USER INTO THE SERVER
function HttpLogin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (!email || !password)
                throw new operational_error_1.X('email and password required', 400);
            const [user] = yield user_services_1.Users.findOneByEmail(email);
            if (!user || !(yield (0, token_helper_1.comparePassword)(password, user.password)))
                throw new operational_error_1.X('invalid username or password', 400);
            return (0, response_dtos_1.serverResponse)(res, 200, (0, create_user_dtos_1.dumbUser)(user));
        }
        catch (error) {
            next(error);
        }
    });
}
exports.HttpLogin = HttpLogin;
function HttpProtectROute(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let token;
            if (req.headers && req.headers.authorization) {
            }
        }
        catch (error) {
            next(error);
        }
    });
}
exports.HttpProtectROute = HttpProtectROute;
function HttpGetUsers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield user_services_1.Users.find();
            (0, response_dtos_1.serverResponse)(res, 200, users);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.HttpGetUsers = HttpGetUsers;
