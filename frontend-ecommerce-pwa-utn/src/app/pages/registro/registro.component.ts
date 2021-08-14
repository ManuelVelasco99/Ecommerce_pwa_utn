import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public fb:FormBuilder,private usuariosService:UsuariosService, private authService:AuthService, private router : Router) { }

  formRegistro = this.fb.group({
    nombre:["",[Validators.required]],
    apellido:["",[Validators.required]],
    email:["",[Validators.required, Validators.email]],
    password:["", Validators.required],
    sexo:["",[Validators.required]],
    telefono:["",[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]],
    fecha_nacimiento:["",[Validators.required]],
  })

  public showE : boolean = false;

  ngOnInit(): void {
  }

  sexs = [{
    value:'H',
    name:'Hombre'
  },
  {
    value:'M',
    name:'Mujer'
  },
  {
    value:'X',
    name:'Otro'
  }]

  validarEmail(){
    console.log('hola');
    console.log(this.formRegistro.controls.email.value);
    this.usuariosService.validarEmail(this.formRegistro.controls.email.value).subscribe((dataBackend : any)=>{
      if(!dataBackend.value){
        this.formRegistro.controls.email.setErrors({
          emailDuplicado: true
        });
        console.log('esta mal')
      }
      else{
        this.formRegistro.controls.email.setErrors(null);
      }
      /*this.formRegistro.controls.email.setErrors({
        notUnique: null
      });*/
      console.log(this.formRegistro.controls.email.hasError('notUnique'))
      console.log(this.formRegistro.controls.email.getError('emailDuplicado'))
    })
    
  }

  datePicker(){console.log('dd')}

  registrar(){
    //console.log(this.formRegistro.value);
    if(this.formRegistro.valid){
      this.usuariosService.registrarUsuario(this.formRegistro.value).subscribe((databackend:any)=>{
        console.log(databackend)
      })
      this.router.navigate(['/home']);
    }

    }
  
   

}
