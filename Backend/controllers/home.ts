import { Request,Response } from "express";
import query from "../bin/mysqlConection";

export={

    getCategories:async(req:Request, res:Response) =>{
        try{const categorias = await query('SELECT * FROM CATEGORY WHERE habilitado=1 AND eliminado=0');
        console.log(categorias)
        res.json({
            estado:'success',
            categorias:categorias})
        }
        catch(error){
            res.json({
                estado:'error',
                error:error
            })
        }
    }
};
