import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})





export class CreateProductosComponent implements OnInit {
  selectedFiles: any;

  constructor(private fb : FormBuilder,private router:Router, private adminService:AdminService, private homeService : HomeService) { }

  categories : Array<any>=[];

  ngOnInit(): void {
    this.homeService.getCategories().subscribe((databackend:any)=>{
      this.categories = databackend.categorias;
      console.log(this.categories)
    });
    

  }

  textButton : string = 'Seleccionar imagen';
  inputFile :boolean = false;

  formProduct = this.fb.group({
    
    nombre:["", Validators.required],
    descripcion:['',Validators.required],
    id_category:['',Validators.required],
    stock:['',[Validators.min(1),Validators.required]],
    precio:['',[Validators.min(1),Validators.required]]
  })
  irProductos(){
    this.router.navigate(['/admin/productos'])
  }

  file:any = []
  filename:string="";

  private validarFile(event:any):Boolean{
    const maxSize = 500000;
    this.file = event.target.files;
    this.filename = event.target.files[0].name

    console.log(this.file)

    if(this.file.length <=0){
      console.log("no se adjunto imagen");
      this.filename = "no hay imagen";
      this.file = [];
      return false
    }

    if(this.file[0].type!= 'image/jpeg'){
      console.log("el formato no es valido");
      this.file = [];
      return false
    }

    if(this.file[0].size > maxSize){
      console.log("ha superado en tamaño permitido");
      this.file = [];
      return false
    }

    return true;
  }

  onFileChange(event:any){


    const validacion = this.validarFile(event);

    if(validacion){
      console.log('piola la pic');
      this.textButton=this.filename;
      this.inputFile = true;

    }

    /*if(validacion){
      console.log("valida ok")
      let file = new FormData();
      file.append('imag', this.file[0] , this.filename);
      /*this.fileService.enviarImagen(file).subscribe(resp=>{
        console.log(resp)
      })
    }
    */
  }

  crearProducto(){
    
    if(this.formProduct.valid && this.inputFile ){

      let form = new FormData();
      form.append('nombre', this.formProduct.get('nombre')?.value);
      form.append('image',this.file[0] , this.filename);
      form.append('id_category',this.formProduct.get('id_category')?.value);
      form.append('descripcion',this.formProduct.get('descripcion')?.value);
      form.append('stock',this.formProduct.get('stock')?.value);
      form.append('precio',this.formProduct.get('precio')?.value);
      this.adminService.createProduct(form).subscribe((databackend:any)=>{
        //console.log(databackend)
      })
      this.irProductos();
    }
  }
    
  

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


}
interface Food {
  value: string;
  viewValue: string;
}