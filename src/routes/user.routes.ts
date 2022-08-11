import { Router } from 'express';
import { HttpGetUserProfile } from '../controllers/user.controller';
const userRouter = Router();

userRouter.get('/my-profile', HttpGetUserProfile);

export default userRouter;
