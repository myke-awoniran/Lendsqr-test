"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const objection_1 = require("objection");
const transactions_entity_1 = require("./transactions.entity");
class Customer extends objection_1.Model {
    static get tableName() {
        return 'customers';
    }
    static get firstName() {
        return 'first_name';
    }
    static get lastName() {
        return 'last_name';
    }
    static get emailColumn() {
        return 'email';
    }
    static get passwordColumn() {
        return 'password';
    }
    static get addressColumn() {
        return 'address';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['first_name', 'last_name', 'email', 'password'],
            properties: {
                id: { type: 'integer' },
                first_name: { type: 'string', minLength: 4, maxLength: 50 },
                last_name: { type: 'string', minLength: 4, maxLength: 50 },
                email: { type: 'string' },
                password: { type: 'string' },
            },
        };
    }
}
exports.Customer = Customer;
Customer.relationMappings = {
    transactions: {
        // A CUSTOMER CAN HAVE MULTIPLE TRANSACTIONS BUT A TRANSACTION CAN
        // BE ASSOCIATED TO A SINGLE CUSTOMER
        relation: objection_1.Model.HasOneRelation,
        modelClass: transactions_entity_1.Transaction,
        join: {
            from: 'Customer.id',
            to: 'transactions.customer_id',
        },
    },
};
