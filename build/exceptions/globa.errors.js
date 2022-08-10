"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
}
exports.errorHandler = errorHandler;
