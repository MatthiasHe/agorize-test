import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

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
  private cartSubject = new Subject<any>();
  private apiUrl = 'http://localhost:3000';
  private productsNumberInCart = 0;

  constructor(private http: HttpClient) { }

  initializeCart(): number {
    const productsInCart = this.getCartContent();
    productsInCart.forEach(product => {
      this.productsNumberInCart += product.quantity;
    });
    return this.productsNumberInCart;
  }

  updateCartNumber(increment: boolean): void {
    if (increment) {
      this.productsNumberInCart++;
    } else {
      this.productsNumberInCart--;
    }
    this.cartSubject.next({ productsNumber: this.productsNumberInCart });
  }

  getCartNumber(): Observable<any> {
    return this.cartSubject.asObservable();
  }

  getCartContent(): ProductInCart[] {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  updateCartContent(newCart: ProductInCart[], increment: boolean) {
    this.updateCartNumber(increment);
    return localStorage.setItem('cart', JSON.stringify(newCart));
  }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl + '/products');
  }
}
