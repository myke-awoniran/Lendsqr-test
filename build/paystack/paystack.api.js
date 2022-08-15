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
exports.finalizeTransfer = exports.initiateTransfer = exports.CreateUser = void 0;
const axios_1 = __importDefault(require("axios"));
function CreateUser(req, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, axios_1.default)({
                method: 'post',
                url: 'https://api.paystack.co/customer',
                data: {
                    email: req.body.email,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                },
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
                },
            });
            return response.data;
        }
        catch (error) {
            next(error);
        }
    });
}
exports.CreateUser = CreateUser;
function initiateTransfer(req, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, axios_1.default)({
                method: 'post',
                url: 'https://api.paystack.co/transfer',
                data: {
                    source: req.body.source,
                    reason: req.body.reason,
                    amount: req.body.amount,
                    recipient: req.body.recipient,
                },
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
                },
            });
            return response.data;
        }
        catch (error) {
            next(error);
        }
    });
}
exports.initiateTransfer = initiateTransfer;
function finalizeTransfer(req, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, axios_1.default)({
                method: 'post',
                url: 'https://api.paystack.co/transfer/finalize-transfer',
                data: {
                    transfer_code: req.body.transfer_code,
                    otp: req.body.otp,
                },
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
                },
            });
            return response.data;
        }
        catch (error) {
            next(error);
        }
    });
}
exports.finalizeTransfer = finalizeTransfer;
