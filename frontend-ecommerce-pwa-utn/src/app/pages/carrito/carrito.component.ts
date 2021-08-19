import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private categoriesService:HomeService,private router:Router,
    private matDialog : MatDialog, private adminService : AdminService, private homeService : HomeService) { }

  total : number = 0;

  ngOnInit(): void {
    
    if(localStorage.getItem('carrito') == null){
      //console.log('carrito vacio')
    }
    else{
      let carrito : Array<any> = JSON.parse(localStorage.getItem('carrito')||'');
      carrito.forEach(element => {
        this.homeService.getProduct(element).subscribe((databackend : any)=>{
          this.dataSource.data.push(databackend.product[0]);
          this.total = this.total + databackend.product[0].price;
          this.dataSource._updateChangeSubscription();
        })
      });
    }
    
    
    
  }

 
  

  ELEMENT_DATA!: any[];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  displayedColumns: string[] = ['imagen','nombre','precio','delete'];

  openDialogDelete(index:number, price : number, id : string){
    if(confirm("Desea eliminar el producto del carrito?")){

      console.log(index,id,price);
      let carrito : Array<any> = JSON.parse(localStorage.getItem('carrito')||'');
      console.log(carrito);
      carrito.splice(carrito.indexOf(id),1);
      console.log(carrito);
      localStorage.setItem('carrito',JSON.stringify(carrito));
      this.dataSource.data.splice(index,1);
      this.total = this.total - price;
      this.dataSource._updateChangeSubscription();
    }
  }

}
