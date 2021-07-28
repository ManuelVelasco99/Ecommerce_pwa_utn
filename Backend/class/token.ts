import jwt from 'jsonwebtoken';

export default class Token{
    static seed:string = "dfghdfgtask;djsd;fgkjf";
    static caducidad:string = "1d";

    constructor(){};

    static getJwtToken(paylod:any):string{
        return jwt.sign({
            user:paylod
        }, this.seed, {expiresIn: this.caducidad})
    };

    static comprobarToken(token:string):Promise<any>{
        return new Promise((resolve, reject)=>{
            jwt.verify(token, this.seed, (error,decode)=>{
                if(error){
                    return reject()
                }
                else {
                    return resolve(decode) 
                }
            })
        })
    }
};