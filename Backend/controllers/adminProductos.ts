import { Request,Response } from "express";
import query from "../bin/mysqlConection";
import IproductCreate from "../interfaces/productCreate";

export={

    showProducts:async(req:Request, res:Response) =>{
        try{const products = await query('SELECT * FROM PRODUCT');
        res.json({estado:'success',products:products})
        }
        catch(error){
            res.json({
                estado:'error',
                error:error
            })
        }
    },

    createProducts:async(req:Request, res:Response) =>{
        try
        {const precioProducto = req.body.precio;
        delete req.body.precio;  
        const productCreate : IproductCreate = req.body;
        await query("start transaction");
        const insertProduct:any = await query('INSERT INTO PRODUCT SET ?',[productCreate])
        console.log(insertProduct);
        const precio ={ 
            id_product:insertProduct.insertId,
            price:precioProducto
        };
        const insertPrecio = await query('INSERT INTO PRICE SET ?',[precio]);
        console.log(insertPrecio);
        await query("commit")
        
        res.json({
            estado:'success',product:insertProduct,
        })}
        catch(error){
            await query("rollback");
            res.json({
                estado:'error',
                error:error
            })
        }        
    }
}