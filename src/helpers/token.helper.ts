import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

interface verifyToken {
  id: number;
  iat: number;
}

export async function createHash(password: string) {
  return await bcrypt.hash(password, 12);
}

export async function comparePassword(
  password: string,
  userPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, userPassword);
}

const secret = JSON.stringify(process.env.JWT_SECRET);

export async function signToken(id: number) {
  return await jwt.sign({ id }, secret, {
    expiresIn: process.env.JWT_EXPIRES,
  });
}

export async function verifyToken(token: string, secret: string) {
  return await jwt.verify(token, secret);
}
