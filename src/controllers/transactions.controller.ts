import { Request, Response, NextFunction } from 'express';
import { finalizeTransfer, initiateTransfer } from '../paystack/paystack.api';

export async function HttpInitiateTransfer(
  req: Request,
  res: Response,
  next: NextFunction
) {
  await initiateTransfer(req, next);
}

export async function HttpFinalizeTransfer(
  req: Request,
  res: Response,
  next: NextFunction
) {
  await finalizeTransfer(req, next);
}
