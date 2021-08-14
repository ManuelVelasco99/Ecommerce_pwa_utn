import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateRoutingModule } from './validate-routing.module';
import { ValidateComponent } from './validate.component';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ValidateComponent
  ],
  imports: [
    CommonModule,
    ValidateRoutingModule,

    //Material
    MatButtonModule
  ]
})
export class ValidateModule { }
