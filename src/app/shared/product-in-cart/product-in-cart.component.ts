import {Component, Input, OnInit} from '@angular/core';
import {ProductInCart, ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.scss']
})
export class ProductInCartComponent {
  @Input() product: ProductInCart;

  private productsInCart: ProductInCart[];

  constructor(private productService: ProductsService) { }

  removeProduct(product) {
    this.productsInCart = JSON.parse(localStorage.getItem('cart')) || [];
    product.quantity--;
    const productIndex = this.productsInCart.findIndex(element => {
      return element.id === this.product.id;
    });
    if (this.productsInCart[productIndex].quantity === 1) {
      this.productsInCart.splice(productIndex, 1);
    } else {
      this.productsInCart[productIndex].quantity--;
    }
    return this.productService.updateCartContent(this.productsInCart, false);
  }
}
