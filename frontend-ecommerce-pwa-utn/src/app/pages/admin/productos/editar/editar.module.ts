import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarProductosComponent } from './editar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    EditarProductosComponent
  ],
  imports: [
    CommonModule,
    EditarRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //Material
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class EditarProductosModule { }
