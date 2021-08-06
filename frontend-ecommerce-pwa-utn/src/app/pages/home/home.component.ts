import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService:HomeService) { }

  cate : Array<string> = [];

  prod : Array<any> = [];

  ngOnInit(): void {
    this.homeService.getCategories().subscribe((dataBackend:any)=>{
      const categoriasA : Array<any> = dataBackend.categorias;  
      categoriasA.forEach(element => {
        this.cate.push(element.nombre);     
      });
      console.log(this.cate);
    });

    this.homeService.getProducts().subscribe((databackend:any)=>{
      const prodA : Array<any> = databackend.productos;
      prodA.forEach(element => {
        this.prod.push({
          nombre:element.nombre,
          precio:element.price,
          imagen:element.imagen
        })
      });
      console.log(this.prod);
    })
    
  }

  //typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
