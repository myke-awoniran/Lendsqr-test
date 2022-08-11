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
const user_entity_1 = require("./user.entity");
const transactions_entity_1 = require("./transactions.entity");
const database_connection_1 = require("./database.connection");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Delete all persons from the db.
        yield user_entity_1.Customer.query().delete();
        yield transactions_entity_1.Transaction.query().delete();
        // Insert one row to the database.
        const customer = yield user_entity_1.Customer.query().insert({
            last_name: 'Rachel Green',
            first_name: 'micheal',
            password: 'michel',
            email: 'rg@gmail.com',
        });
        // Read all rows from the db.
        const customerRead = yield user_entity_1.Customer.query();
        console.log(customerRead);
        //   const order = await Customer.relatedQuery('order')
        //     .for(customer.id)
        //     .insert({ total: 55 });
        //   console.log(order);
        const orderTotal = yield transactions_entity_1.Transaction.query();
        // .select('total')
        // .where('customer_id', '=', customer.id)
        // .orderBy('total');
        //   console.log(orderTotal);
    });
}
main()
    .then(() => database_connection_1.db.destroy())
    .catch((err) => {
    console.error(err);
    return database_connection_1.db.destroy();
});
