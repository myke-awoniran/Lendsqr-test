"use strict";
// X means exception
Object.defineProperty(exports, "__esModule", { value: true });
exports.X = void 0;
class X extends Error {
    constructor(message, statusCode, status) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
        this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.X = X;
// namespace ErrorType {
//   export interface config {
//     name: string;
//     message: string;
//     statusCode: number;
//   }
// }
