import { Response, Request } from "express";
import query from "../bin/mysqlConection";
import IuserRegister from "../interfaces/userRegister";
import IuserToken from "../interfaces/userToken";
import bcrypt from 'bcrypt';
import Token from "../class/token";

export = {
    
    registerUser: async(req:Request, res:Response)=>{
        try{
            const userRegister:IuserRegister = req.body;
            userRegister.password = bcrypt.hashSync(userRegister.password,10);
            const insertResult = await query('INSERT INTO USER SET ?',[userRegister]);
            res.json({estado: 'success', mensaje: 'usuario registrado'});
        }
        catch(error){
            res.json({estado:'error',error:error})
        }
    },

    loginUser: async(req:Request, res:Response)=>{
        try{
            const datosLogin = {
                email:req.body.email,
                pass:req.body.password
            };
            const userSelected : Array<any> = await query("SELECT * FROM USER WHERE email=?",[datosLogin.email]);
            if (userSelected.length == 1 && bcrypt.compareSync(datosLogin.pass,userSelected[0].password)){ 
                const userToken : IuserToken = userSelected[0];
                const token  = Token.getJwtToken({
                    id_user : userToken.id_user,
                    nombre : userToken.nombre,
                    apellido : userToken.apellido,
                    admin : userToken.admin
                });
                res.json({estado:'success',mensaje:'usuario logueado', token : token});              
            };                
            res.json({estado:'success',mensaje:'usuario o constraseña incorrecta'});
        }
        catch(error){
            res.json({
                estado:"error",
                mensaje: error
            }); 
        }  
    }

};