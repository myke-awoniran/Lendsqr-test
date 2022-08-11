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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = exports.comparePassword = exports.createHash = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
function createHash(password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.hash(password, 12);
    });
}
exports.createHash = createHash;
function comparePassword(password, userPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.compare(password, userPassword);
    });
}
exports.comparePassword = comparePassword;
const secret = JSON.stringify(process.env.JWT_SECRET);
function signToken(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield jsonwebtoken_1.default.sign({ id }, secret, {
            expiresIn: process.env.JWT_EXPIRES,
        });
    });
}
exports.signToken = signToken;
function verifyToken(token, secret) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield jsonwebtoken_1.default.verify(token, secret);
    });
}
exports.verifyToken = verifyToken;
