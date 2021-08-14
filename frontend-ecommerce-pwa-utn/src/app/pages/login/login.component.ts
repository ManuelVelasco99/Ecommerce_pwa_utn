import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb:FormBuilder,private usuariosService:UsuariosService, private authService:AuthService, private router : Router) { }
  formLogin = this.fb.group({
    email:["",[Validators.required, Validators.email]],
    password:["", Validators.required]
  })

  ngOnInit(): void {
  }

  public showE : boolean = false;
  

  ejecutarLogin(){
    console.log(this.formLogin.value,this.formLogin.valid);   
    if(this.formLogin.valid){ 
      this.usuariosService.login(this.formLogin.value).subscribe((dataBackend:any)=>{
        console.log(dataBackend)
        if(dataBackend.mensaje == 'usuario o constraseña incorrecta'){
          this.showE = true;
        }
        if(dataBackend.mensaje == 'usuario logueado'){
          console.log(dataBackend.token)
          this.authService.authenticate(dataBackend.token);
          this.router.navigate(['/home']);
        }
      })
    }
  }
      
  
  
}
