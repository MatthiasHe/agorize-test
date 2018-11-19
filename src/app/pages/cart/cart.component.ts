import { Component, OnInit } from '@angular/core';
import {ProductInCart, ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartContent: ProductInCart[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.cartContent = this.productService.getCartContent();
  }

}
