import mysql from "mysql";
import variables_entorno from '../config';

const datos ={
    host: variables_entorno.DB_HOST,
    user: variables_entorno.DB_USER,
    password: variables_entorno.DB_PASS,
    database: variables_entorno.DB_NAME,
    port: Number(variables_entorno.DB_PORT)
}

const conectionMysql = mysql.createConnection(datos);

conectionMysql.connect((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log(`Base de datos mysql corriendo en ${datos.user}@${datos.host} en el puerto ${datos.port} a la base ${datos.database}`);
    }
});

const query = (query:string, values:Array<any> = [])=>{
    return new Promise<any>((resolve,reject)=>{
        conectionMysql.query(query, values, (error, result:{})=>{
            if(error){
                return reject(error)
            }
            else{
                return resolve(result)
            }
        })
    })
}

export default query;