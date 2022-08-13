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
exports.HttpGetUserProfile = void 0;
const user_services_1 = require("../services/user.services");
const operational_error_1 = require("../exceptions/operational.error");
const response_dtos_1 = require("../dtos/response.dtos");
const create_user_dtos_1 = require("../dtos/create-user.dtos");
function HttpGetUserProfile(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_services_1.Users.findOne(req.user.id);
            if (!user)
                throw new operational_error_1.X('no user found with the provided id', 404);
            (0, response_dtos_1.serverResponse)(res, 200, (0, create_user_dtos_1.dumbUser)(user));
        }
        catch (error) {
            next(error);
        }
    });
}
exports.HttpGetUserProfile = HttpGetUserProfile;
