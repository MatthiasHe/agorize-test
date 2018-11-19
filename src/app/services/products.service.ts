import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Product {
  id: number;
  name: string;
  picture: string;
  description: string;
}

export interface ProductInCart {
  id: number;
  name: string;
  picture: string;
  description: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl + '/products');
  }
}
