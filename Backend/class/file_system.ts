import path from "path";
import fs from "fs";
import unidid from "uniqid";
import { IfileUpload } from "../interfaces/file-upload";

export default class FileSystem{
    
    constructor(){};
    
    public static IniciarCarpetas():void{
        let uploadPath:string = path.resolve(__dirname, '../uploads');
        if(!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);
        uploadPath = path.resolve(__dirname, '../uploads/temp');
        if(!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);
        uploadPath = path.resolve(__dirname, '../uploads/products');
        if(!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);         
    };
    
    private generarNombreUnico(nombreOriginal:string){
        const nombreArr:Array<string> = nombreOriginal.split('.') // [nombre , extension]
        const extension:string = nombreArr[nombreArr.length-1];
        const idUnico:string = unidid();     
        return `${idUnico}.${extension}`;    
    };

    public guardarImagenTemporal(file:IfileUpload):Promise<string>{     
        return new Promise<string>(async (resolve, reject) => {
            
            const pathTemporal:string = path.resolve(__dirname, '../uploads/temp');;//La ruta en la que va a guardarse la imagen
            const nombreArchivo:string = this.generarNombreUnico(file.name); //El nombre de la imagen guardada en el path          
            await file.mv(`${pathTemporal}/${nombreArchivo}`,(error:any)=>{
                if(error){
                    return reject(error)
                }
                else{
                    return resolve(nombreArchivo)
                }
            })
            
        })
    };

    private obtenerImagenesEnTemp(nombreImg:string):Array<string>{
        const pathUserTemp:string = path.resolve(__dirname, '../uploads/temp');
        return fs.readdirSync(pathUserTemp) || [];
    }
    
    ImagenDeTempHaciaPost(nombreImg:string){     
        const pathUserTemp:string = path.resolve(__dirname, '../uploads/temp');//desde
        const pathUserPhoto:string = path.resolve(__dirname, '../uploads/products');//hacia       
        //const imagenesTemp : Array<string> = this.obtenerImagenesEnTemp(nombreImg);  
        /*imagenesTemp.forEach(imagen => {
            fs.renameSync(`${pathUserTemp}/${imagen}`,`${pathUserPhoto}/${imagen}`);
        });*/
        fs.renameSync(`${pathUserTemp}/${nombreImg}`,`${pathUserPhoto}/${nombreImg}`);
        
    };

    public getImageUrl(img:string){
        return path.resolve(__dirname,'../uploads/products',img)
    };
        
    /*private crearCarpetaUsuario(userId:string):string{
        const pathUser = path.resolve(__dirname, '../uploads', productId);
        const pathUserTemp = path.resolve(pathUser, 'temp');        
        const existe:boolean = fs.existsSync(pathUser);
        if(!existe){
            fs.mkdirSync(pathUser);
            fs.mkdirSync(pathUserTemp)
        }
        return pathUserTemp
    };
    
    
        
        
        getPhotoUrl(userId:string, img:string):string{
            const pathPhoto = path.resolve(__dirname, '../uploads', userId, 'photo', img);
            console.log(pathPhoto);
            if(fs.existsSync(pathPhoto)){
                return pathPhoto
            }
            else{
                return path.resolve(__dirname, '../assets', 'unnamed.png')
            }
            
        }
        */
        
    }