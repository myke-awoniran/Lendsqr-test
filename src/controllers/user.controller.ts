import { Users } from '../services/user.services';
import { X } from '../exceptions/operational.error';
import { NextFunction, Request, Response } from 'express';

export async function HttpGetUserProfile(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    //
  } catch (error) {
    console.log(error);
    next(error);
  }
}
