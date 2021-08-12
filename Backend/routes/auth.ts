import {Router, Request, Response } from 'express';
import verifyAdmin from '../middlewares/admin';
import verifyToken from '../middlewares/authentication';


const authRouter = Router();

authRouter.get('/login',verifyToken, async (req:Request, res:Response)=>{
    res.json({
        estado: true
    })
});

authRouter.get('/admin',verifyToken,verifyAdmin, async (req:Request, res:Response)=>{
    res.json({
        estado: true
    })
});

export default authRouter;