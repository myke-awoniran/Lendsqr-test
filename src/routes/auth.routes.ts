import { Router } from 'express';
import {
  HttpSignup,
  HttpLogin,
  HttpGetUsers,
} from '../controllers/auth.controller';
const authRouter = Router();

authRouter.post('/signup', HttpSignup);

authRouter.post('/login', HttpLogin);

authRouter.get('/users', HttpGetUsers);

export default authRouter;
