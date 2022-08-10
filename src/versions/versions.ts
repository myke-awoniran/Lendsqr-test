import { Router } from 'express';
import authRouter from '../routes/auth.routes';

const version_1 = Router();

version_1.use('/auth', authRouter);

export default version_1;
