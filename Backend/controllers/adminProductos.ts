import { Request,Response } from "express";
import query from "../bin/mysqlConection";
import { IfileUpload } from "../interfaces/file-upload";
import IproductCreate from "../interfaces/productCreate";
import FileSystem from "../class/file_system";

const filesystem = new FileSystem();


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

    createProducts:async(req:any, res:Response) =>{
        try{
        
        const precioProducto = req.body.precio;
        if(req.files === null){
            return res.status(400).json({
                estado:"error",
                mensaje: "No se incluyó imagen"
            })
        };    
        let imagen:IfileUpload = req.files.image;
        if(!imagen){
            return res.status(400).json({
                estado:"error",
                mensaje: "No se envio imagen"
            })
        };

        if(!imagen.mimetype.includes('image')){ //Valida que el tipo de archivo sea una imagen
            return res.status(400).json({
                estado:"error",
                mensaje: "El file no es una imagen"
            })
        }

        delete req.body.precio;  
        const productCreate : IproductCreate = req.body;     
        const nombreImagenTemp = await filesystem.guardarImagenTemporal(imagen);
        filesystem.ImagenDeTempHaciaPost(nombreImagenTemp);
        productCreate.imagen = nombreImagenTemp;
        
        await query("start transaction");
        const insertProduct:any = await query('INSERT INTO PRODUCT SET ?',[productCreate])
        //console.log(insertProduct);
        const precio ={ 
            id_product:insertProduct.insertId,
            price:precioProducto
        };
        await query('INSERT INTO PRICE SET ?',[precio]);
        await query("commit");      
        res.json({
            estado:'success',product:insertProduct,
        })
        }
        catch(error){
            await query("rollback");
            res.json({
                estado:'error',
                error:error
            })
        }        
    },

    getProductImage:(req:any, res:Response) =>{//devuelve la imagen con el nombre ingresado en ?image='nombreImagen'      
        const imgUrl =  filesystem.getImageUrl(req.query.image);
        //console.log(imgUrl);
        res.sendFile(imgUrl);
    },

    deleteProduct:async (req:Request, res: Response)=>{
        try{
            const id_product=req.query.id;
            const value = req.query.value; //Si value es 1 la categoria se elimina si es 0 se recupera
            const prodEliminado = await query('UPDATE PRODUCT SET eliminado=? WHERE id_product=?',[value,id_product])
            res.json({estado:'success',
                    delProd:prodEliminado
            })
        }
        catch(error){
            res.json({estado:'error',
                    error:error
            })
        }
    },

    updateProduct:async(req:any, res:Response)=>{
        try{
            const imageOld = req.body.imageOld;
            delete req.body.imageOld;
            let prod : IproductCreate;
            const id_product : number = req.body.id_product;
            delete req.body.id_product;
            const price = req.body.price;
            delete req.body.price;
            prod=req.body;
            let imagen : IfileUpload;
            if(!(req.files == null)) {
                imagen = req.files.image;
                const nombreImagenTemp = await filesystem.guardarImagenTemporal(imagen);
                filesystem.ImagenDeTempHaciaPost(nombreImagenTemp);
                filesystem.deleteImage(imageOld);
                prod.imagen = nombreImagenTemp;   
            }

            if(req.body.price == null){
                //console.log('precio undefined')
                const update = await query('UPDATE PRODUCT SET ? WHERE id_product=?',[prod,id_product]);
                res.json({
                    estado:'success',
                    body:prod ||'null',
                    file: req.files||'',
                    query: update 
                })
            }
            
                await query("start transaction");
                //console.log(prod);
                const update = await query('UPDATE PRODUCT SET ? WHERE id_product=?',[prod,id_product]);
                const precio ={ 
                    id_product:id_product,
                    price:price
                };
                await query('INSERT INTO PRICE SET ?',[precio]);
                await query("commit");
                res.json({
                    estado:'success',
                    body:prod ||'null',
                    query: update 
                })         
        }
        catch(error){
            res.json({
                estado:'error',
                error: error
            })
        }
    }


}