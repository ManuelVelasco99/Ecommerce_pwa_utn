import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from 'src/environments/environment';
import { timeout, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  rutaApi:string = environment.rutaBackend;
  time_out = environment.timeOutBakend;

  login(loginData:{}):any{
    console.log(loginData)
    return this.http.post(`${this.rutaApi}/user/login`,loginData,{})
        // .pipe(
        //   timeout(this.time_out)
        //   // map(result=>{
        //   //   if(result["estado"] == 'success'){
        //   //     return true
        //   //   }
        //   //   else{
        //   //     return false
        //   //   }
        //   // })
        // )
  }

  verificarToken(){
    return this.http.get(`${this.rutaApi}/users/`)
  }
}

interface respuesta {
  estado:string,
  mensaje:string,
  data:any
}