import { Users } from '../services/user.services';
import { X } from '../exceptions/operational.error';
import { dumbUser } from '../dtos/create-user.dtos';
import { serverResponse } from '../dtos/response.dtos';
import { Response, Request, NextFunction } from 'express';
import { ExistingUser } from '../helpers/existing-user.helper';
import { CreateUser } from '../paystack/paystack.api';

import {
  createHash,
  comparePassword,
  verifyToken,
  signToken,
} from '../helpers/token.helper';

export interface RequestWithUser extends Request {
  user: {
    id: number;
  };
}

// CONTROLLER FOR  SIGNING USER UP
export async function HttpSignup(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (await ExistingUser(req.body.email))
      return next(new X('account already exist', 409));
    const payStackCustomer = await CreateUser(req, next);
    req.body.paystack_id = payStackCustomer.data.id;
    req.body.customer_code = payStackCustomer.data.customer_code;
    req.body.password = await createHash(req.body.password);
    const user = await Users.create(req.body);
    return serverResponse(res, 201, dumbUser(user), await signToken(user.id));
  } catch (error: any) {
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
    const token = await signToken(user.id);
    return serverResponse(res, 200, dumbUser(user), token);
  } catch (error: any) {
    next(error);
  }
}

export async function   HttpProtectRoute(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  try {
    let token;

    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token)
      throw new X(`you're not logged in, kindly login to access`, 401);
    const secret = JSON.stringify(process.env.JWT_SECRET);
    const payload: any = await verifyToken(token, secret);
    const user = await Users.findOne(payload.id);
    console.log(payload.id);
    if (!user)
      throw new X('there is no user user with the provided token', 400);
    req.user = user;
    next();
  } catch (error: any) {
    next(error);
  }
}
