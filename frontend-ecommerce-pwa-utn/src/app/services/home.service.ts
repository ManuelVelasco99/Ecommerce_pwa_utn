import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  rutaApi:string = environment.rutaBackend;
  time_out = environment.timeOutBakend;

  getCategories():any{
    return this.http.get(`${this.rutaApi}/home/categories`);
  }
}

