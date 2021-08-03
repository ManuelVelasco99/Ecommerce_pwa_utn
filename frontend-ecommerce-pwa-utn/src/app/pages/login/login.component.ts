import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb:FormBuilder,private usuariosService:UsuariosService) { }
  formLogin = this.fb.group({
    email:["",[Validators.required, Validators.email]],
    password:["", Validators.required]
  })

  ngOnInit(): void {
  }

  ejecutarLogin(){
    console.log(this.formLogin.value,this.formLogin.valid);   
    if(this.formLogin.valid){ 
      this.usuariosService.login(this.formLogin.value).subscribe((dataBackend:any)=>{
        console.log(dataBackend)
      })
    }
  }
      
    
  
}
