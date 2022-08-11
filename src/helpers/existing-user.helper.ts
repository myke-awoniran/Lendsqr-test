import { Users } from '../services/user.services';

export async function ExistingUser(email: string): Promise<boolean> {
  const [user] = await Users.findOneByEmail(email);
  return user;
}
