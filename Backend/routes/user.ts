import { Router } from "express";
import userController from '../controllers/user';

const userRoutes = Router();

userRoutes.post('/login',userController.loginUser);

export default userRoutes;