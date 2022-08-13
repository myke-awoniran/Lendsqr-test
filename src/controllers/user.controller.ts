import { Users } from '../services/user.services';
import { X } from '../exceptions/operational.error';
import { NextFunction, Response } from 'express';
import { RequestWithUser } from './auth.controller';
import { serverResponse } from '../dtos/response.dtos';
import { dumbUser } from '../dtos/create-user.dtos';

export async function HttpGetUserProfile(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await Users.findOne(req.user.id);
    if (!user) throw new X('no user found with the provided id', 404);
    serverResponse(res, 200, dumbUser(user));
  } catch (error) {
    next(error);
  }
}
