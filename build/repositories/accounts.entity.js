"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const objection_1 = require("objection");
const user_entity_1 = require("./user.entity");
class Account extends objection_1.Model {
    //
    static get tableName() {
        return 'accounts';
    }
    static get accountType() {
        return 'account_type';
    }
    static get accountNumber() {
        return 'account_number';
    }
    static get accountName() {
        return 'account_name';
    }
    static get customerId() {
        return 'customer_id';
    }
}
exports.Account = Account;
Account.relationMappings = {
    transactions: {
        relation: objection_1.Model.HasOneRelation,
        modelClass: user_entity_1.Customer,
        join: {
            from: 'Account.id',
            to: 'Customer',
        },
    },
};
