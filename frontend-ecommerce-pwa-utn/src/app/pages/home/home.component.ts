import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService:HomeService) { }

  cate : Array<string>= [];

  ngOnInit(): void {
    this.homeService.getCategories().subscribe((dataBackend:any)=>{
      const categoriasA : Array<any> = dataBackend.categorias; 
      let categorias : Array<any>=[]; 
      categoriasA.forEach(element => {
        this.cate.push(element.nombre);  
      
      
      });
      console.log(this.cate);

    });
    
  }

  //typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
