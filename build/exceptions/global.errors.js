"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function ErrorResponse(err, res) {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
}
function HandleProd(err, res) {
    if (err.isoperational) {
        return ErrorResponse(err, res);
    }
}
function HandleDev(err, res) {
    res.status(err.statusCode).json({
        status: 'fail',
        message: err.message,
        stack: err.stack,
    });
}
function errorHandler(err, req, res, next) {
    if (process.env.NODE_ENV === 'production')
        return HandleProd(err, res);
    if (process.env.NODE_ENV === 'development')
        return HandleDev(err, res);
    return res.status(500).json({
        status: 'error',
        message: 'opps!, something went very wrong,our technical team are working to get it fixed, kindly try again!',
    });
}
exports.errorHandler = errorHandler;
