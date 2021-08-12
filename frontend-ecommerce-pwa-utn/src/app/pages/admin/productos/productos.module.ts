import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';

//Material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogprodComponent } from './dialogprod/dialogprod.component';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    ProductosComponent,
    DialogprodComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    
    //Material
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ProductosModule { }
