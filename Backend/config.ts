import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname,'../env',process.env.NODE_ENV+'.env')
});

let variables_entorno = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    
    //Server
    SERVER_HOST: process.env.SERVER_HOST || 'localhost',
    SERVER_PORT: process.env.SERVER_PORT || 3000,

    //MySql
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASS: process.env.DB_PASS || '',
    DB_NAME: process.env.DB_NAME || `ecommerce_pwa_utn`,
    DB_PORT: process.env.DB_PORT || 3306,

    //NodeMailer
    NM_USER: process.env.NM_USER,
    NM_PASS: process.env.NM_PASS,


}

export default variables_entorno;