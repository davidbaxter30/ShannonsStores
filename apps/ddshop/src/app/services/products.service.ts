import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '@shannons-shops/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { 
    console.log(environment);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this._apiUrl}/Products`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  hello(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this._apiUrl}/hello`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }
}
