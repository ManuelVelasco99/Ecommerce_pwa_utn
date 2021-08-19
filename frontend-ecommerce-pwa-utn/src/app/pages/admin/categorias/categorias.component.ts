import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogcatComponent } from './dialogcat/dialogcat.component';
import { AdminService } from 'src/app/services/admin.service';

//import { DialogCategoriaComponent } from 'src/app/components/dialog-categoria/dialog-categoria.component';





@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(private categoriesService:HomeService,private router:Router,
    private matDialog : MatDialog, private adminService : AdminService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((databackend:any)=>{
      const catA : Array<any> = databackend.categorias;
      this.dataSource.data= catA  as any[];
      //console.log(this.dataSource,catA);
    })
  }

  edit(id:any){
    console.log('editaste',id)
    this.router.navigate(['/admin/categorias/editar'], { queryParams: { id: id } })
  }

  delete(id:any){
   // console.log('borraste',id)
  }

  ELEMENT_DATA!: any[];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  displayedColumns: string[] = ['id','nombre','edit','delete'];

  openDialogDelete(id : string,i:number){
  //console.log(i,'esi')
    let deleteCategory : boolean ;
  let dialogRef = this.matDialog.open(DialogcatComponent,{});
  dialogRef.afterClosed().subscribe((result:any)=>{
    deleteCategory=result;
    if(deleteCategory){
      this.deleteCategory(id,i)
    }
  }) 
}

irCreateCategoria(){
  this.router.navigate(['/admin/categorias/create'])
}

  deleteCategory(id:string,i:number){
      this.adminService.deleteCategory(id).subscribe((databackend:any)=>{
        //console.log(databackend.estado,databackend.estado === 'success')
        if(databackend.estado === 'success'){      
          this.dataSource.data.splice(i,1);
          this.dataSource._updateChangeSubscription();
        }       
      })
  }

}
