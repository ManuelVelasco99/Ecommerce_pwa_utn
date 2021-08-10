import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
  rutaApi:string = environment.rutaBackend;
  time_out = environment.timeOutBakend;

  getCategory(id:string):any{
    return this.http.get(`${this.rutaApi}/admin/category?id=${id}`);
  }

  editCategory(categoryData:{}):any{
    return this.http.post(`${this.rutaApi}/admin/category`,categoryData,{});
  }

  deleteCategory(id:string):any{
    return this.http.post(`${this.rutaApi}/admin/categories/delete?id=${id}&value=1`,{})
  }
  
}
