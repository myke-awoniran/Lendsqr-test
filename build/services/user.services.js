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
exports.Users = void 0;
const user_entity_1 = require("../repositories/user.entity");
class UserService {
    constructor(Customer) {
        this.Customer = Customer;
        this.Customer = Customer;
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.Customer.query().findById(id);
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.Customer.query().insert(body);
        });
    }
    update(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.Customer.query().patch(body);
        });
    }
    findOneByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.Customer.query().where('email', email);
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.Customer.query();
        });
    }
}
exports.Users = new UserService(user_entity_1.Customer);
