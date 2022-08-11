import { Router } from 'express';
import { HttpSignup, HttpLogin } from '../controllers/auth.controller';
const authRouter = Router();

authRouter.post('/login', HttpLogin);
authRouter.post('/signup', HttpSignup);

export default authRouter;
