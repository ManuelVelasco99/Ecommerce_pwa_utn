import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

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
}
