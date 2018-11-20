import {Component, Input, OnInit} from '@angular/core';
import {ProductInCart, ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.scss']
})
export class ProductInCartComponent {
  @Input() product: ProductInCart;

  private productsInCart: ProductInCart[];

  constructor(private productService: ProductService) { }

  removeProduct(product): void {
    // We decrement the product quantity for the view
    product.quantity--;
    // We get the actual cart's content from localStorage
    this.productsInCart = JSON.parse(localStorage.getItem('cart')) || [];
    // We update the content on the cart
    const productIndex = this.productsInCart.findIndex(element => {
      return element.id === this.product.id;
    });
    if (this.productsInCart[productIndex].quantity === 1) {
      // The product should be removed from the cart
      this.productsInCart.splice(productIndex, 1);
    } else {
      this.productsInCart[productIndex].quantity--;
    }
    return this.productService.updateCartContent(this.productsInCart, false);
  }
}
