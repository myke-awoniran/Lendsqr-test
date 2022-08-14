import { Request, Response, NextFunction } from 'express';
import { initiateTransfer } from '../paystack/paystack.api';

export async function HttpInitiateTransfer(
  req: Request,
  res: Response,
  next: NextFunction
) {
  await initiateTransfer(req, next);
}
