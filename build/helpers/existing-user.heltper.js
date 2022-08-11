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
exports.createHash = exports.ExistingUser = void 0;
const user_services_1 = require("../services/user.services");
const util_1 = require("util");
const crypto_1 = require("crypto");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
function ExistingUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_services_1.Users.findOneByEmail(email);
    });
}
exports.ExistingUser = ExistingUser;
function createHash(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = (0, crypto_1.randomBytes)(16).toString('hex');
        const hash = (yield scrypt(password, salt, 32));
        const result = `${salt}.${hash.toString('hex')}`;
        return result;
    });
}
exports.createHash = createHash;
