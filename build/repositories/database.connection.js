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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = exports.db = void 0;
const knex_1 = require("knex");
const objection_1 = require("objection");
// initialize knex
exports.db = (0, knex_1.knex)({
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        port: 10744,
        user: process.env.DATABASE_USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    },
    migrations: {
        tableName: 'migrations',
    },
});
objection_1.Model.knex(exports.db);
function connectDb() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exports.db.raw('SELECT VERSION()');
        console.log('database connected successfully');
    });
}
exports.connectDb = connectDb;
