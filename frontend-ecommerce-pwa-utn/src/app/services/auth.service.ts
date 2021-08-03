import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authState = new BehaviorSubject(false);
  

  authenticate(token:any){
    this.authState.next(true);
    localStorage.setItem("token", token)
  };

  isAuthenticate(){
    return this.authState.value
  };

  logoat(){
    localStorage.removeItem("token");
    this.authState.next(false)
  }

}
