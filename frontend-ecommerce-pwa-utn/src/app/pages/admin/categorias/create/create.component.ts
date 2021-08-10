import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateCategoriaComponent implements OnInit {

  constructor(public fb:FormBuilder,private router : Router, 
    private route: ActivatedRoute, private adminService : AdminService) { }

  ngOnInit(): void {
  }

  formCategory = this.fb.group({
    
    nombre:["", Validators.required]
  })

  irCategorias(){ this.router.navigate(['/admin/categorias'])}

  crearCategoria(){
    if(this.formCategory.valid){
      console.log(this.formCategory.value);
      this.adminService.createCategory(this.formCategory.value).subscribe((databackend:any)=>{
        console.log(databackend);
      })
      this.irCategorias();
    }
  }

}
