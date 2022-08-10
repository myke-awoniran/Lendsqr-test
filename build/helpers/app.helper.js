"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.undefinedRoutes = exports.homeHandler = void 0;
const response_dtos_1 = require("../dtos/response.dtos");
const operational_error_1 = require("../exceptions/operational.error");
function homeHandler(req, res) {
    (0, response_dtos_1.serverResponse)(res, 200, 'welcome to myke lendsqr API');
}
exports.homeHandler = homeHandler;
function undefinedRoutes(req, res, next) {
    return next(new operational_error_1.X(`can't find  this  ${req.originalUrl} on this server. check the URL with the correct HTTP method, then try again`, 404));
}
exports.undefinedRoutes = undefinedRoutes;
