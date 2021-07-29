import { Request,Response } from "express";
import query from "../bin/mysqlConection";
import IproductCreate from "../interfaces/productCreate";

async function getProducts(){
    await query(`drop temporary table if exists product_price`);
    await query(`create temporary table product_price
    SELECT PRODUCT.id_product,MAX(PRICE.fecha_desde) fecha_desde  
    FROM PRODUCT INNER JOIN PRICE ON PRODUCT.id_product=PRICE.id_product GROUP BY PRODUCT.id_product`);
    const products = await query(`SELECT PRODUCT.*,PRICE.fecha_desde,PRICE.price, category.nombre nombre_categoria  FROM PRODUCT INNER JOIN PRICE ON PRODUCT.id_product=PRICE.id_product  
	INNER JOIN product_price ON product.id_product=product_price.id_product AND product_price.fecha_desde=price.fecha_desde 
    INNER JOIN category on product.id_category = category.id_category`);
    return products;
}

export={

    showProducts:async(req:Request, res:Response) =>{
        try{
        const products = await getProducts();
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
        await query('INSERT INTO PRICE SET ?',[precio]);
        await query("commit");      
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