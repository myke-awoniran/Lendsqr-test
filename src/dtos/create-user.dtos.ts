export interface User {
  id: number;
  first_name: string;
  last_name: string;
  password: string;
  address: string;
  email: string;
  paystack_id: string;
  transactions_id: string;
  customer_code: string;
  joined_at: string;
}

export function dumbUser(user: User) {
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
