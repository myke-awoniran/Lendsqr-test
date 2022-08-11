"use strict";
// X means exception
Object.defineProperty(exports, "__esModule", { value: true });
exports.X = void 0;
class X extends Error {
    constructor(message, statusCode, status, isoperational) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.status = status;
        this.isoperational = isoperational;
        this.message = message;
        this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.statusCode = statusCode;
        this.isoperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.X = X;
