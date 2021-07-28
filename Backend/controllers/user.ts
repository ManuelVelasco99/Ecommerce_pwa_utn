import { Response, Request } from "express";
import query from "../bin/mysqlConection";

export = {

    loginUser: async(req:Request, res:Response)=>{
        /*
                if(bcrypt.compareSync(password, userSelect[0].password)){
                    
                    const userToken = Token.getJwtToken({
                        id_usuario:userSelect[0].id_usuario,
                        nombre: userSelect[0].nombre,
                        apellido: userSelect[0].apellido
                    });
                    
                    res.json({
                        estado:"success",
                        mensaje:"usuario logueado",
                        token: userToken
                    })
                }
         */
    
        try{
            const datosLogin = {
                email:req.body.email,
                pass:req.body.password
            };
            const userSelected : Array<any> = await query("SELECT * FROM USER WHERE email=?",[datosLogin.email]);
            if (userSelected.length == 1 && datosLogin.pass==userSelected[0].password){               
                res.json({estado:'success',userSelected:userSelected[0]});              
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