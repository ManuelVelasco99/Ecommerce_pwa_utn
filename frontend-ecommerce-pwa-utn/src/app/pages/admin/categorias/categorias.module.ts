import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';


//Material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogcatComponent } from './dialogcat/dialogcat.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CategoriasComponent,
    DialogcatComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    

    //Material
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
    
  ]
})
export class CategoriasModule { }
