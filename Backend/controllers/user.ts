import { Response, Request } from "express";
import query from "../bin/mysqlConection";
import IuserRegister from "../interfaces/userRegister";
import IuserToken from "../interfaces/userToken";
import bcrypt from 'bcrypt';
import Token from "../class/token";
import Email from "../class/email";
import variables_entorno from "../config";
import unidid from "uniqid";

const emailClass = new Email()
export = {
    
    registerUser: async(req:Request, res:Response)=>{
        try{
            const userRegister:IuserRegister = req.body;
            userRegister.id_validate = unidid();
            userRegister.password = bcrypt.hashSync(userRegister.password,10);
            const insertResult = await query('INSERT INTO USER SET ?',[userRegister]);
            const emailEnvio = await emailClass.enviarEmail(userRegister.email,"Completa tu registro","su usuario fue registrado existosamente",
            `<h1>Hola ${userRegister.nombre}, te has registrado exitosamente.</h1>
            <a href="http://${variables_entorno.SERVER_HOST}:${variables_entorno.SERVER_PORT}/user/validate?id_validate=${userRegister.id_validate}">Click aquí para validar tu usuario</a>`);
            res.json({estado: 'success', mensaje: 'usuario registrado', emailEnvio:emailEnvio});
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
    },

    profileUser: async(req:any, res:Response)=>{
        const userToken : IuserToken = req.user;
        res.json({
            estado:'success',
            mensaje: `Hola ${userToken.nombre} ${userToken.apellido}. Estas logueado como ${userToken.id_user}`
        })
    },

    validateUser: async(req:any, res:Response)=>{
        try{
            const param={id_validate:req.query.id_validate};
            const resultQuery = await query("UPDATE USER SET habilitado=1 WHERE ?",[param]);
            res.json({estado: 'success', mensaje: param,q:resultQuery});
        }
        catch(error){
            res.json({estado:'error',error:error})
        }
    }

};