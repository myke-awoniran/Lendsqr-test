"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const knex_1 = require("knex");
const db = (0, knex_1.knex)({
    client: 'mysql',
    connection: {
        host: 'mysql-85164-0.cloudclusters.net',
        port: 10744,
        user: 'admin',
        password: 'y1Nip8sq',
        database: process.env.DATABASE,
    },
    migrations: {
        tableName: 'migrations',
    },
});
function connectDb() {
    db.raw('SELECT VERSION()');
    console.log('database connected successfully');
}
exports.connectDb = connectDb;
