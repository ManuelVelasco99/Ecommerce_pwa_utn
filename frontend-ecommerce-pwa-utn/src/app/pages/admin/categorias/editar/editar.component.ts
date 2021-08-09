import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(public fb:FormBuilder,private router : Router, private route: ActivatedRoute, private adminService : AdminService) { }
  
  formCategory = this.fb.group({
    id:["",[Validators.required]],
    nombre:["", Validators.required]
  })


  id_cat : any ;
  nombre : any;

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.queryParamMap.get('id');
    
    console.log(this.id_cat)
    this.adminService.getCategory(this.id_cat).subscribe((databackend:any)=>{
      console.log(databackend)
      this.nombre = databackend.category.nombre;
      this.formCategory.controls.nombre.setValue(this.nombre)
    })

    this.formCategory.controls.id.setValue(this.id_cat);
  }


  editarCategoria(){
    if(this.formCategory.valid){

      this.adminService.editCategory(this.formCategory.value).subscribe((databackend:any)=>{
        console.log(databackend);
      })
      this.irCategorias();
    }
  }

  irCategorias(){ this.router.navigate(['/admin/categorias'])}
}
