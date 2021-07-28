import { NextFunction, Response } from "express";
import IuserToken from "../interfaces/userToken";

const verifyAdmin = (req:any, res:Response, next:NextFunction)=>{
    const user : IuserToken = req.user;
    console.log(user.admin,req.user);
    if(user.admin){
        next();  
    }
    res.json({
        estado:'error',
        mensaje:'el usuario no es admin'
    })
}

export default verifyAdmin;
