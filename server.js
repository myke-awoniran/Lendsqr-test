"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const http_1 = __importDefault(require("http"));
const App_1 = __importDefault(require("./App"));
const port = process.env.PORT || 5000;
const server = http_1.default.createServer(App_1.default);
console.log(port);
function startServer(port) {
    // first connect db before starting the server
    server.listen(port, () => {
        console.log(`lendsqr API listening to traffic on port ${port}`);
    });
}
startServer(port);
