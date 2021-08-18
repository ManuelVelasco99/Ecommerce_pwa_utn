import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCategoriaModule } from 'src/app/pages/admin/categorias/editar/editar.module';
import { LoginModule } from 'src/app/pages/login/login.module';
import { RegistroModule } from 'src/app/pages/registro/registro.module';
import { AdminGuard } from './guards/admin.guard';
import { LoggedGuard } from './guards/logged.guard';
import { CategoriasModule } from './pages/admin/categorias/categorias.module';
import { CreateCategoriaModule } from './pages/admin/categorias/create/create.module';
import { CreateProductosModule } from './pages/admin/productos/create/create.module';
import { EditarProductosModule } from './pages/admin/productos/editar/editar.module';

import { ProductosModule } from './pages/admin/productos/productos.module';
import { CarritoModule } from './pages/carrito/carrito.module';
import { HomeModule } from './pages/home/home.module';
import { ValidateModule } from './pages/user/validate/validate.module';


const routes: Routes = [
  {
    path:"login",
    loadChildren: ()=> import('src/app/pages/login/login.module').then(m=>LoginModule)
  },
  {
    path:"registro",
    loadChildren: ()=> import('src/app/pages/registro/registro.module').then(m=>RegistroModule)
  },
  {
    path:"home",
    loadChildren: ()=> import('src/app/pages/home/home.module').then(m=>HomeModule)
  },
  {
    path:"admin/productos",
    loadChildren: ()=> import('src/app/pages/admin/productos/productos.module').then(m=>ProductosModule),
    canActivate:[LoggedGuard,AdminGuard]
  },
  {
    path:"admin/categorias",
    loadChildren: ()=> import('src/app/pages/admin/categorias/categorias.module').then(m=>CategoriasModule),
    canActivate:[LoggedGuard,AdminGuard]
  },
  {
    path:"admin/categorias/editar",
    loadChildren: ()=> import('src/app/pages/admin/categorias/editar/editar.module').then(m=>EditarCategoriaModule),
    canActivate:[LoggedGuard,AdminGuard]
  },
  {
    path:"admin/categorias/create",
    loadChildren: ()=> import('src/app/pages/admin/categorias/create/create-routing.module').then(m=>CreateCategoriaModule),
    canActivate:[LoggedGuard,AdminGuard]
  },
  {
    path:"admin/productos/create",
    loadChildren: ()=> import('src/app/pages/admin/productos/create/create-routing.module').then(m=>CreateProductosModule),
    canActivate:[LoggedGuard,AdminGuard]
  },
  {
    path:"admin/productos/editar",
    loadChildren: ()=> import('src/app/pages/admin/productos/editar/editar-routing.module').then(m=>EditarProductosModule),
    canActivate:[LoggedGuard,AdminGuard]
  },
  {
    path:"user/validate",
    loadChildren: ()=> import('src/app/pages/user/validate/validate-routing.module').then(m=>ValidateModule)
  },
  {
    path:"carrito",
    loadChildren: ()=> import('src/app/pages/carrito/carrito-routing.module').then(m=>CarritoModule)
  },

  
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
