import { Request, Response, NextFunction } from 'express';

interface ErrorType extends Error {
  name: string;
  isoperational: boolean;
  message: string;
  statusCode: number;
  status: string;
}

function ErrorResponse(err: ErrorType, res: Response) {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
}

function HandleProd(err: ErrorType, res: Response) {
  if (err.isoperational) {
    return ErrorResponse(err, res);
  }
}

function HandleDev(err: ErrorType, res: Response) {
  res.status(err.statusCode).json({
    status: 'fail',
    message: err.message,
    stack: err.stack,
  });
}

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (process.env.NODE_ENV === 'production') return HandleProd(err, res);
  if (process.env.NODE_ENV === 'development') return HandleDev(err, res);
  return res.status(500).json({
    status: 'error',
    message:
      'opps!, something went very wrong,our technical team are working to get it fixed, kindly try again!',
  });
}
