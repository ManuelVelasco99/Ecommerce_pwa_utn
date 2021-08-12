import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) { 
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event : any) => {
      //Do something with the NavigationEnd event object.
      this.authService.isLogged().subscribe((databackend:any)=>{
        if(databackend.estado) this.condition=false;
        else this.condition = true;   
      })
      this.authService.isAdmin().subscribe((databackend:any)=>{
        if(databackend.estado) this.adminShow=true;
        else this.adminShow = false;   
      })
    });
    
  }

  ngOnInit(): void {
    
  }

  irProductos(){
    this.router.navigate(['/admin/productos'])
  }

  irLogin(){
    this.router.navigate(['/login'])
  }

  irHome(){
    this.router.navigate(['/home'])
  }

  irCategorias(){
    this.router.navigate(['/admin/categorias'])
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }

  condition = true;
  adminShow = false;
}
