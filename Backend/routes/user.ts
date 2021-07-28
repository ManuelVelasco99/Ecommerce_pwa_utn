import { Router } from "express";
import userController from '../controllers/user';
import verifyToken from '../middlewares/authentication'
import  verifyAdmin  from "../middlewares/admin";

const userRoutes = Router();

userRoutes.post('/login',userController.loginUser);

userRoutes.post('/register', userController.registerUser);

userRoutes.get('/profile',verifyToken,verifyAdmin, userController.profileUser)

export default userRoutes;