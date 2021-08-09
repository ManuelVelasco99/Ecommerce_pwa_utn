import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  constructor(private productService:HomeService) { }

  

  ngOnInit(): void {
    this.productService.getProducts().subscribe((databackend:any)=>{
      const prodA : Array<any> = databackend.productos;
      this.dataSource.data= prodA  as any[];
      console.log(this.dataSource,prodA);
    })

  }


  edit(id:any){
    console.log('editaste',id)
  }

  delete(id:any){
    console.log('borraste',id)
  }

  ELEMENT_DATA!: any[];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

 

  displayedColumns: string[] = ['id','nombre', 'nombre_categoria', 'imagen', 'price','stock','edit','delete'];

  /*descripcion: "sirve para ..."
  id_product: 36
  nombre: "productote"
  nombre_categoria: "fullbo"
  id_category: 2
  fecha_desde: "2021-07-29T17:53:08.201Z"
  imagen: "97qxfk0krp7te8r.jpg"
  eliminado: 0
habilitado: 1
price: 5000
stock: 10*/
  
}
