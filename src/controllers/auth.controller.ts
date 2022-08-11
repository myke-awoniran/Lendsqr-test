import { Users } from '../services/user.services';
import { X } from '../exceptions/operational.error';
import { dumbUser } from '../dtos/create-user.dtos';
import { serverResponse } from '../dtos/response.dtos';
import { Response, Request, NextFunction } from 'express';
import { ExistingUser } from '../helpers/existing-user.helper';
import { createHash, comparePassword } from '../helpers/token.helper';

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
    return serverResponse(res, 201, user);
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
    return serverResponse(res, 200, dumbUser(user));
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
    let token;
    if (req.headers && req.headers.authorization) {
    }
  } catch (error) {
    next(error);
  }
}

export async function HttpGetUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await Users.find();
    serverResponse(res, 200, users);
  } catch (error) {
    next(error);
  }
}
