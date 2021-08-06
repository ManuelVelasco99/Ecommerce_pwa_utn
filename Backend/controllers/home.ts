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
    },

    getProducts:async(req:any, res:Response) =>{
        try{
          
        await query(`drop temporary table if exists product_price`);
        await query(`create temporary table product_price
        SELECT PRODUCT.id_product,MAX(PRICE.fecha_desde) fecha_desde  
        FROM PRODUCT INNER JOIN PRICE ON PRODUCT.id_product=PRICE.id_product GROUP BY PRODUCT.id_product`);
        const products = await query(`SELECT PRODUCT.*,PRICE.fecha_desde,PRICE.price, category.nombre nombre_categoria  FROM PRODUCT INNER JOIN PRICE ON PRODUCT.id_product=PRICE.id_product  
	    INNER JOIN product_price ON product.id_product=product_price.id_product AND product_price.fecha_desde=price.fecha_desde 
        INNER JOIN category on product.id_category = category.id_category
        WHERE product.habilitado = 1 AND product.eliminado = 0`);
        
        res.json({
            estado:'success',
            productos:products})
        }
        catch(error){
            res.json({
                estado:'error',
                error:error
            })
        }
    }
};
