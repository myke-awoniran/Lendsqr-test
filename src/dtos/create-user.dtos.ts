export interface User {
  id: number;
  first_name: string;
  last_name: string;
  password: string;
  address: string;
  email: string;
}

export function dumbUser(user: User) {
  return {
    user_id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    address: user.address,
    email: user.email,
  };
}
