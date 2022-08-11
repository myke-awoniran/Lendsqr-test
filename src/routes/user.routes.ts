import { Router } from 'express';
import { HttpGetUserProfile } from '../controllers/user.controller';
import { HttpProtectRoute } from '../controllers/auth.controller';
const userRouter = Router();

userRouter.get('/my-profile', HttpProtectRoute, HttpGetUserProfile);

export default userRouter;
