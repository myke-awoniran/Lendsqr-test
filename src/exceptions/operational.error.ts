// X means exception

export class X extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public status?: string
  ) {
    super(message);
    this.message = message;
    this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

// namespace ErrorType {
//   export interface config {
//     name: string;
//     message: string;
//     statusCode: number;
//   }
// }
