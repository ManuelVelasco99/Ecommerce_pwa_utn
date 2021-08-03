import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from 'src/app/pages/login/login.module';


const routes: Routes = [
  {
    path:"login",
    loadChildren: ()=> import('src/app/pages/login/login.module').then(m=>LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
