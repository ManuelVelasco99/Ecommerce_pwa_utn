import nodemailer from "nodemailer";
import { resolveContent } from "nodemailer/lib/shared";
import variables_entorno from "../config";

export default class Email {
    constructor() {}

    host:string = "smtp.gmail.com"
    port:number = 587
    secure:boolean =false 
    tsl:boolean=false
    auth={
        user: variables_entorno.NM_USER,
        pass: variables_entorno.NM_PASS
    }

    enviarEmail(cuenta_destino:string, asunto:string, cuerpo_email:string,html:string){
        
        return new Promise((resolve,reject)=>{
            const transport = nodemailer.createTransport(
                {host: this.host,
                port: this.port,
                secure:this.secure,
                auth:{
                    user: this.auth.user,
                    pass: this.auth.pass
                },
                tls:{rejectUnauthorized: this.tsl}
                }
                );
    
                const mailOptions = {
                    from: this.auth.user,
                    to: cuenta_destino,
                    subject: asunto,
                    text: cuerpo_email,
                    html:html
                }
    
                nodemailer.createTestAccount((error)=>{
                    transport.sendMail(mailOptions,(error,info)=>{
                        if(error){
                            return reject(error)
                        }
                        else{
                            return resolve(info)
                        }
                    })
                })
        })        
    }

}