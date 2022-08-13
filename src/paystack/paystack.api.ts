import axios from 'axios';
import { NextFunction, Request } from 'express';

// I USED THIS TO FIX THE POOR TYPE DEFINITION ON REQUEST BODY
interface RequestBody extends Request {
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
