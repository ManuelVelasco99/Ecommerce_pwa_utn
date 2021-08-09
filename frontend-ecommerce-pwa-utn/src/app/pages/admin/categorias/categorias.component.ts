import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(private categoriesService:HomeService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((databackend:any)=>{
      const catA : Array<any> = databackend.categorias;
      this.dataSource.data= catA  as any[];
      console.log(this.dataSource,catA);
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
  displayedColumns: string[] = ['id','nombre','edit','delete'];

}
