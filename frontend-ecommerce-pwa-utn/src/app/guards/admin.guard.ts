import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService : AuthService, private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authService.isLogged().subscribe((databackend:any)=>{
        if(!databackend.estado) this.router.navigate(['/login'])
        
      })
    this.authService.isAdmin().subscribe((databackend:any)=>{
      console.log(databackend.estado)
      if(!databackend.estado) this.router.navigate(['/home'])
    })
    
    return true;
  }
  
}
