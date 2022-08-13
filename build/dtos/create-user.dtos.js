"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dumbUser = void 0;
function dumbUser(user) {
    return {
        user_id: `LENDSQR${user.id}`,
        first_name: user.first_name,
        last_name: user.last_name,
        address: user.address,
        email: user.email,
        paystack_id: user.paystack_id,
        customer_code: user.customer_code,
    };
}
exports.dumbUser = dumbUser;
