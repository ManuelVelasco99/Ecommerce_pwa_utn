import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService:HomeService, private route : ActivatedRoute, private router : Router) { }

  cate : Array<any> = [];

  prod : Array<any> = [];

  categoryParam: string ='';

  rutaApi:string = environment.rutaFrontend;
  ngOnInit(): void {
    this.categoryParam = this.route.snapshot.queryParamMap.get('id_category') ||'';
    this.homeService.getCategories().subscribe((dataBackend:any)=>{
      const categoriasA : Array<any> = dataBackend.categorias;  
      categoriasA.forEach(element => {
        this.cate.push(element);     
      });
      //console.log(this.cate);
    });

    
    if(this.categoryParam==''){
      //console.log('vino sin params');
      this.homeService.getProducts().subscribe((databackend:any)=>{
        //console.log(databackend);
        const prodA : Array<any> = databackend.productos;
        prodA.forEach(element => {
          this.prod.push({
            id : element.id_product,
            nombre:element.nombre,
            precio:element.price,
            imagen:element.imagen
          })
        });
        //console.log(this.prod);
      })  
    }
    else{
     // console.log('vino con params')
      this.homeService.getProductsWithCategory(this.categoryParam).subscribe((databackend:any)=>{
        //console.log(databackend);
        const prodA : Array<any> = databackend.productos;
        prodA.forEach(element => {
          this.prod.push({
            nombre:element.nombre,
            precio:element.price,
            imagen:element.imagen
          })
        });
        //console.log(this.prod);
      })
    }
     
  }

  productoEnCarrito(id:string, carrito:Array<any>){
    let inCarrito : boolean = false;
    carrito.forEach(element => {
      if(element==id) inCarrito = true;
    });
    return inCarrito
  }

  addCarrito(id:string){
    
    if(localStorage.getItem('carrito') == null){
      let carrito = [id];
      localStorage.setItem('carrito',JSON.stringify(carrito));
      //console.log(carrito);
    }
    else{
      let carrito : Array<any> = JSON.parse(localStorage.getItem('carrito')||'');
      if(!this.productoEnCarrito(id,carrito)){
        carrito.push(id);
        localStorage.setItem('carrito',JSON.stringify(carrito));
        alert('Se añadió correctamente el producto al carrito')
      }
      else{
        alert('El producto ya se encuentra en el carrito')
      }   
    } 
  }


  irHomeCategoria(id : string){
    this.router.navigate(['/home'], { queryParams: { id_category: id } })
  }

  //typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
