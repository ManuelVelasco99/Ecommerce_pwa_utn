import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateCategoriaComponent } from './create.component';



//Material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateCategoriaComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule, 
    ReactiveFormsModule,

    //Material
    MatButtonModule,
    MatInputModule
  ]
})
export class CreateCategoriaModule { }
