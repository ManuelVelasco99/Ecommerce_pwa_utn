import express from 'express';
import variables_entorno from '../config';
 
export default class Server {
    public app:express.Application;
    public port: number = Number(variables_entorno.SERVER_PORT);
    public host: string = variables_entorno.SERVER_HOST;
    
    constructor(){
        this.app = express();
    }

    start(callback:any){
        this.app.listen(this.port, this.host, callback);
    }

}