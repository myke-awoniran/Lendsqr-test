import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export async function createHash(password: string) {
  return await bcrypt.hash(password, 12);
}

export async function comparePassword(
  password: string,
  userPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, userPassword);
}

console.log(process.env.PORT);
// export async function signToken(id: object): Promise<void> {
//   return await jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES,
//   });
// }

// export function verifyToken() {}
