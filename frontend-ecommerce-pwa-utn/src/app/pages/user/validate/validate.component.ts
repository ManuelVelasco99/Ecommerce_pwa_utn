import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  constructor(private usuariosService : UsuariosService,private route: ActivatedRoute, private router : Router) { }

  nombreUsuario : string='';

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap.get('id_validate'),'hola');
    this.usuariosService.validarUsuario(this.route.snapshot.queryParamMap.get('id_validate')||'').subscribe((databackend:any)=>{
      console.log(databackend);
      this.nombreUsuario = databackend.user.nombre
    })
  }

}
