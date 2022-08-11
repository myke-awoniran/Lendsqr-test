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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const http_1 = __importDefault(require("http"));
const App_1 = __importDefault(require("./App"));
const database_connection_1 = require("./repositories/database.connection");
const port = process.env.PORT || 5000;
const server = http_1.default.createServer(App_1.default);
function startServer(port) {
    return __awaiter(this, void 0, void 0, function* () {
        // CONNECT DATABASE BEFORE STARTING THE SERVER
        yield (0, database_connection_1.connectDb)();
        server.listen(port, () => {
            console.log(`${process.env.NODE_ENV} :::lend-sqr API listening to traffic on port ${port} `);
        });
    });
}
startServer(port);
