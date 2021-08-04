import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from 'src/app/pages/login/login.module';
import { HomeModule } from './pages/home/home.module';


const routes: Routes = [
  {
    path:"login",
    loadChildren: ()=> import('src/app/pages/login/login.module').then(m=>LoginModule)
  },
  {
    path:"home",
    loadChildren: ()=> import('src/app/pages/login/login.module').then(m=>HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
