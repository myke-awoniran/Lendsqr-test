import { Users } from '../services/user.services';
import { X } from '../exceptions/operational.error';
import { dumbUser } from '../dtos/create-user.dtos';
import { serverResponse } from '../dtos/response.dtos';
import { Response, Request, NextFunction } from 'express';
import { ExistingUser } from '../helpers/existing-user.helper';
import { createHash, comparePassword } from '../helpers/token.helper';
import { signToken } from '../helpers/token.helper';

// CONTROLLER FOR  SIGNING USER UP
export async function HttpSignup(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (await ExistingUser(req.body.email))
      return next(new X('account already exist', 409));
    req.body.password = await createHash(req.body.password);
    const user = await Users.create(req.body);
    return serverResponse(res, 201, dumbUser(user), await signToken(user.id));
  } catch (error) {
    next(error);
  }
}

// CONTROLLER FOR LOGGING USER INTO THE SERVER
export async function HttpLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new X('email and password required', 400);
    const [user] = await Users.findOneByEmail(email);
    if (!user || !(await comparePassword(password, user.password)))
      throw new X('invalid username or password', 400);
    console.log(user.id);
    const token = await signToken(user.id);
    return serverResponse(res, 200, dumbUser(user), token);
  } catch (error) {
    next(error);
  }
}

export async function HttpProtectROute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let token: string;
    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
  } catch (error) {
    next(error);
  }
}
