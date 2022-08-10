import { NextFunction, Request, Response } from 'express';
import { serverResponse } from '../dtos/response.dtos';
import { X } from '../exceptions/operational.error';

export function homeHandler(req: Request, res: Response) {
  serverResponse(res, 200, 'welcome to myke lendsqr API');
}

export function undefinedRoutes(
  req: Request,
  res: Response,
  next: NextFunction
) {
  return next(
    new X(
      `can't find  this  ${req.originalUrl} on this server. check the URL with the correct HTTP method, then try again`,
      404
    )
  );
}
