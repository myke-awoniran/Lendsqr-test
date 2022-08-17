// X means exception

interface Error {
  message: string;
  statusCode: number;
  status: string;
  isoperational: boolean;
}

export class X extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public status?: string,
    public isoperational?: boolean
  ) {
    super(message);
    this.message = message;
    this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.statusCode = statusCode;
    this.isoperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
