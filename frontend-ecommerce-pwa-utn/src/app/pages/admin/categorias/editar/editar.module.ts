import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarComponent } from './editar.component';

//Material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarComponent
  ],
  imports: [
    CommonModule,
    EditarRoutingModule,FormsModule, 
    ReactiveFormsModule,
    
    
    //Material
    MatButtonModule,
    MatInputModule
  ]
})
export class EditarCategoriaModule { }
