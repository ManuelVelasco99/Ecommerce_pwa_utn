import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { DialogprodComponent } from './dialogprod/dialogprod.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  constructor(private productService:HomeService,private matDialog : MatDialog, private adminService : AdminService,
    private router : Router) { }

  

  ngOnInit(): void {
    this.productService.getProducts().subscribe((databackend:any)=>{
      const prodA : Array<any> = databackend.productos;
      this.dataSource.data= prodA  as any[];
      //console.log(this.dataSource,prodA);
    })

  }

  irCrearProducto(){
    this.router.navigate(['/admin/productos/create'])
  }

  edit(id:any){
    this.router.navigate(['/admin/productos/editar'], { queryParams: { id: id } })
  }

  openDialogDelete(id : string,i:number){
    //console.log(i,'esi')
      let deleteCategory : boolean ;
    let dialogRef = this.matDialog.open(DialogprodComponent,{});
    dialogRef.afterClosed().subscribe((result:any)=>{
      deleteCategory=result;
      if(deleteCategory){
        this.deleteProduct(id,i)
      }
    }) 
  }


  deleteProduct(id:string,i:number){
    this.adminService.deleteProduct(id).subscribe((databackend:any)=>{
      //console.log(databackend.estado,databackend.estado === 'success')
      if(databackend.estado === 'success'){      
        this.dataSource.data.splice(i,1);
        this.dataSource._updateChangeSubscription();
      }       
    })
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
