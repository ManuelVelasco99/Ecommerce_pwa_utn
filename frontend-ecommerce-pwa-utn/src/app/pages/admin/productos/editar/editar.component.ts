import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarProductosComponent implements OnInit {

  constructor(private fb : FormBuilder, private router : Router, private homeService : HomeService,
    private route: ActivatedRoute, private adminService:AdminService) { }
  
  categories : Array<any>=[];
  
  id_prod : any ;
  product : any;
  url : any;
  
  
  //nombre : any;
  ngOnInit(): void {
    this.id_prod = this.route.snapshot.queryParamMap.get('id');
    this.homeService.getCategories().subscribe((databackend:any)=>{
      this.categories = databackend.categorias;
      console.log(this.categories)
    });
    this.homeService.getProduct(this.id_prod).subscribe((databackend:any)=>{
      this.product = databackend.product[0]
      this.formProduct.controls.nombre.setValue(this.product.nombre);
      this.formProduct.controls.descripcion.setValue(this.product.descripcion);
      this.formProduct.controls.id_category.setValue(this.product.id_category);
      this.formProduct.controls.stock.setValue(this.product.stock);
      this.formProduct.controls.precio.setValue(this.product.price);
      this.url= `http://localhost:3000/admin/proudcts/image?image=${this.product.imagen}`;

    })
    
    this.formProduct.controls.id.setValue(this.id_prod);
  }

  textButton : string = 'Seleccionar imagen';
  inputFile :boolean = false;

  formProduct = this.fb.group({
    id:["",[Validators.required]],
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
      console.log(event.target.files[0])
      this.file = event.target.files[0]
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
      this.url = (<FileReader>event.target).result;
      this.textButton=this.filename;
      this.inputFile = true;
      console.log(this.url)
      }
    }
  } 

  editProduct(){
    if(this.formProduct.valid){

      let form = new FormData();
      form.append('id_product', this.formProduct.get('id')?.value);
      form.append('nombre', this.formProduct.get('nombre')?.value);
      if(this.inputFile) {
        form.append('image',this.file , this.filename);
        form.append('imageOld', this.product.imagen);
      }
      form.append('id_category',this.formProduct.get('id_category')?.value);
      form.append('descripcion',this.formProduct.get('descripcion')?.value);
      form.append('stock',this.formProduct.get('stock')?.value);
      if(!(this.formProduct.get('precio')?.value==this.product.price)) {console.log('dist',this.formProduct.get('precio')?.value); form.append('price',this.formProduct.get('precio')?.value);}
      this.adminService.updateProduct(form).subscribe((databackend:any)=>{
        console.log('esperando respuesta')
        console.log(databackend)
      })
      this.irProductos();
    }
  }

}
