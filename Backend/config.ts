import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname,'../env',process.env.NODE_ENV+'.env')
});

let variables_entorno = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    SERVER_HOST: process.env.HOST || 'localhost',
    SERVER_PORT: process.env.PORT || 3000,
}

export default variables_entorno;