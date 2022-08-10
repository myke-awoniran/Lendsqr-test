"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverResponse = void 0;
function serverResponse(res, statusCode, data, token) {
    res.status(statusCode).json({
        status: 'success',
        data,
        token,
    });
}
exports.serverResponse = serverResponse;
