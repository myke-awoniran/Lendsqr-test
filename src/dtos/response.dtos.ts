import { Response } from 'express';

export function serverResponse(
  res: Response,
  statusCode: number,
  data: any,
  token?: string
) {
  res.status(statusCode).json({
    status: 'success',
    data,
    token,
  });
}
