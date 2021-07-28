import { NextFunction, Response } from "express";
import Token from "../class/token";



    const verifyToken = (req:any, res:Response, next:NextFunction)=>{
        const userToken = req.get('x-token') || "";
        
        Token.comprobarToken(userToken)
        .then(decoded=>{
            req.user = decoded.user
            next()
        })
        .catch(error=>{
            res.json({
                mensaje: "Token incorrecto",
                error: error
            })
        });    
    };

    const admin = (req:any, res:Response, next:NextFunction)=>{
        console.log(req.user.admin);
    };
 export default verifyToken;

