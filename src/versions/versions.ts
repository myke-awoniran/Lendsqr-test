import { Router } from 'express';
import authRouter from '../routes/auth.routes';
import userRouter from '../routes/user.routes';

const version_1 = Router();

version_1.use('/auth', authRouter);

version_1.unsubscribe('/users', userRouter);

export default version_1;
