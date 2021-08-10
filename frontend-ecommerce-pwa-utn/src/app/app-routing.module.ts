import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCategoriaModule } from 'src/app/pages/admin/categorias/editar/editar.module';
import { LoginModule } from 'src/app/pages/login/login.module';
import { CategoriasModule } from './pages/admin/categorias/categorias.module';
import { CreateCategoriaModule } from './pages/admin/categorias/create/create.module';

import { ProductosModule } from './pages/admin/productos/productos.module';
import { HomeModule } from './pages/home/home.module';


const routes: Routes = [
  {
    path:"login",
    loadChildren: ()=> import('src/app/pages/login/login.module').then(m=>LoginModule)
  },
  {
    path:"home",
    loadChildren: ()=> import('src/app/pages/home/home.module').then(m=>HomeModule)
  },
  {
    path:"admin/productos",
    loadChildren: ()=> import('src/app/pages/admin/productos/productos.module').then(m=>ProductosModule)
  },
  {
    path:"admin/categorias",
    loadChildren: ()=> import('src/app/pages/admin/categorias/categorias.module').then(m=>CategoriasModule)
  },
  {
    path:"admin/categorias/editar",
    loadChildren: ()=> import('src/app/pages/admin/categorias/editar/editar.module').then(m=>EditarCategoriaModule)
  },
  {
    path:"admin/categorias/create",
    loadChildren: ()=> import('src/app/pages/admin/categorias/create/create-routing.module').then(m=>CreateCategoriaModule)
  }
  
  /*,
  {
    path:"admin/categorias/editar",
    loadChildren: ()=> import('src/app/pages/admin/categorias/editar/editar.module').then(m=>EditarComponent)
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
