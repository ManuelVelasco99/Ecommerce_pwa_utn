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

export default verifyToken;

