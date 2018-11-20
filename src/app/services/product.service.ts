import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

export interface Product {
  id: number;
  name: string;
  picture: string;
  description: string;
}

export interface ProductInCart extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private cartSubject = new Subject<number>();
  private apiUrl = 'http://localhost:3000';
  private productsNumberInCart = 0;

  constructor(private http: HttpClient) { }

  // Initialize the products's amount in the cart
  initializeCart(): number {
    const productsInCart = this.getCartContent();
    productsInCart.forEach(product => {
      this.productsNumberInCart += product.quantity;
    });
    return this.productsNumberInCart;
  }

  // Update the products's amount in the cart
  updateCartNumber(increment: boolean): void {
    if (increment) {
      this.productsNumberInCart++;
    } else {
      this.productsNumberInCart--;
    }
    this.cartSubject.next(this.productsNumberInCart);
  }

  // Observable to know in real time the products's amount in the cart
  getCartNumber(): Observable<any> {
    return this.cartSubject.asObservable();
  }

  // Return the cart's content from localStorage
  getCartContent(): ProductInCart[] {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  // Update the product's amount in the cart and the localStorage cart content
  updateCartContent(newCart: ProductInCart[], increment: boolean): void {
    this.updateCartNumber(increment);
    return localStorage.setItem('cart', JSON.stringify(newCart));
  }

  // Return the products from the DB
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/products');
  }
}
