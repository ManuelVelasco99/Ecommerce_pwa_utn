import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateComponent } from './validate.component';

const routes: Routes = [
  {
    path:"", 
    component:ValidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidateRoutingModule { }
