import { Router } from 'express';
import authRouter from '../routes/auth.routes';
import userRouter from '../routes/user.routes';
import transactionRouter from '../routes/transactions.routes';

const version_1 = Router();

version_1.use('/auth', authRouter);

version_1.use('/users', userRouter);

version_1.use('/transactions', transactionRouter);

export default version_1;
