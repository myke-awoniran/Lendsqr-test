"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const versions_1 = __importDefault(require("./versions/versions"));
const app_helper_1 = require("./helpers/app.helper");
const global_errors_1 = require("./exceptions/global.errors");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//MIDDLEWARE TO PREVENT ATTACK AND HIDE INFORMATION ABOUT THE POWERED ENGINES
app.use((0, helmet_1.default)());
//MIDDLEWARE TO PLACE THE BODY OBJECT ON THE REQUEST BODY
app.use(body_parser_1.default.urlencoded({ extended: true }));
// LOGGER MIDDLEWARE
app.use((0, morgan_1.default)('combined'));
// HOME ROUTER
app.get('/', app_helper_1.homeHandler);
// VERSIONS CONTROLLER, incase the company want to release different versions
app.use(versions_1.default);
// TO CATCH UNHANDLED ROUTES
app.use(app_helper_1.undefinedRoutes);
//GENERAL ERROR HANDLER FOR THE APPLICATION
app.use(global_errors_1.errorHandler);
exports.default = app;
