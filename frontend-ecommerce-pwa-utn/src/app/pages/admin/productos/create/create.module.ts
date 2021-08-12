import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateProductosComponent } from './create.component';

//Material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxMatFileInputModule } from '@angular-material-components/file-input';




@NgModule({
  declarations: [
    CreateProductosComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule, 
    ReactiveFormsModule,

    //Material
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,

    NgxMatFileInputModule

    

  

  ]
})
export class CreateProductosModule { }
