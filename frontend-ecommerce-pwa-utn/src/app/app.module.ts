import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/*
import { NavbarComponent } from './components/navbar/navbar.component';
*/

import { NavbarModule } from './components/navbar/navbar.module';

//Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { TokenInterceptor } from './services/token-interceptor.service';




@NgModule({
  declarations: [
    AppComponent
    
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule
    
    
    

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
