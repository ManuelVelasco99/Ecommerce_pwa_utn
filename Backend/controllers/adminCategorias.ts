import { Request,Response } from "express";
import query from "../bin/mysqlConection";

export={

    showCategories:async(req:Request, res:Response) =>{
        try{const categorias = await query('SELECT * FROM CATEGORY');
        res.json({estado:'success',categorias:categorias})
        }
        catch(error){
            res.json({
                estado:'error',
                error:error
            })
        }
    },

    getCategory :async(req:Request, res:Response) =>{
        try{
            const id = req.query.id;
            const categoria = await query('SELECT * FROM CATEGORY WHERE id_category = ?',[id]);
            res.json({
                estado:'success',
                category:categoria[0]
            })
        }
        catch(error){
            res.json({
                estado:'error',
                error:error
            })
        }
    },

    updateCategory :async(req:Request, res:Response) =>{
        try{
            const cat = req.body;
            const categoria = await query('UPDATE category SET nombre = ? WHERE (id_category = ?)',[cat.nombre,cat.id]);
            ;
            res.json({
                estado:'success',
                console:categoria
                //category:categoria[0]
            })
        }
        catch(error){
            res.json({
                estado:'error',
                error:error
            })
        }
    },

    createCategory:async(req:any, res:Response) =>{
        try{
            const category = {nombre:req.body.nombre};
            const nuevaCategoria = await query('INSERT INTO CATEGORY SET ?',[category]);
            res.json({
                estado:'success',
                categoria:nuevaCategoria        
            })
        }
        catch(error){
            res.json({
                estado:'error',
                error:error
                
            })
        }
    },

    deleteCategory:async(req:Request,res:Response) =>{
        try{
            const id_categoria=req.query.id;
            const value = req.query.value; //Si value es 1 la categoria se elimina si es 0 se recupera
            const categoriaEliminada = await query('UPDATE CATEGORY SET eliminado=? WHERE id_category=?',[value,id_categoria])
            res.json({estado:'success',
                    delCat:categoriaEliminada
            })
        }
        catch(error){
            res.json({estado:'error',
                    error:error
            })
        }
    },

    hideCategory:async(req:Request,res:Response) =>{
        try{
            const id_categoria=req.query.id;
            const estado = req.query.value; //Si value es 1 la categoria se habilita y si es 0 se deshabilita
            const categoriaOcultada = await query('UPDATE CATEGORY SET habilitado=? WHERE id_category=?',[estado,id_categoria])
            res.json({estado:'success',
                    delCat:categoriaOcultada
            })
        }
        catch(error){
            res.json({estado:'error',
                    error:error
            })
        }
    },

    

};

