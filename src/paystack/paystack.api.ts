import axios from 'axios';
import { NextFunction, Request } from 'express';

//  USE THIS TO FIX THE POOR TYPE DEFINITION ON REQUEST BODY
export interface RequestBody extends Request {
  body: { [key: string]: string | undefined };
}

export async function CreateUser(
  req: RequestBody,
  next: NextFunction
): Promise<any> {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.paystack.co/customer',
      data: {
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      },
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
      },
    });
    return response.data;
  } catch (error: any) {
    next(error);
  }
}

export async function initiateTransfer(
  req: RequestBody,
  next: NextFunction
): Promise<any> {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.paystack.co/transfer',
      data: {
        source: req.body.source,
        reason: req.body.reason,
        amount: req.body.amount,
        recipient: req.body.recipient,
      },
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    next(error);
  }
}

export async function finalizeTransfer(
  req: Request,
  next: NextFunction
): Promise<any> {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.paystack.co/transfer/finalize-transfer',
      data: {
        transfer_code: req.body.transfer_code,
        otp: req.body.otp,
      },
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    next(error);
  }
}
