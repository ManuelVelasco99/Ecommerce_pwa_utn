import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  authState = new BehaviorSubject(false);
  rutaApi:string = environment.rutaBackend;

  authenticate(token:any){
    this.authState.next(true);
    localStorage.setItem("token", token)
  };

  isAuthenticate(){
    return this.authState.value
  };

  logout(){
    localStorage.removeItem("token");
    this.authState.next(false)
  }

  isLogged(){
    return this.http.get(`${this.rutaApi}/auth/login`);
  } 

  isAdmin(){
    return this.http.get(`${this.rutaApi}/auth/admin`);
  }

}
