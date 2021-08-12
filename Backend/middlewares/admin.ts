import { NextFunction, Response } from "express";
import IuserToken from "../interfaces/userToken";

const verifyAdmin = (req:any, res:Response, next:NextFunction)=>{
    const user : IuserToken = req.user;
    if(user.admin){
        next();  
    }
    else
    {res.json({
        estado:false,
        mensaje:'el usuario no es admin'
    })}
}

export default verifyAdmin;
