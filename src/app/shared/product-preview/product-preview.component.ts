import {Component, Input, OnInit} from '@angular/core';
import {ProductInCart, ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})

export class ProductPreviewComponent {
  @Input() product: ProductInCart;

  private productsCart: ProductInCart[];

  constructor(private productService: ProductService) { }

  addInCart() {
    this.productsCart = this.productService.getCartContent();
    if (this.productsCart.some(product => product.id === this.product.id)) {
      const productIndex = this.productsCart.findIndex(element => {
        return element.id === this.product.id;
      });
      this.productsCart[productIndex].quantity++;
    } else {
      this.product.quantity = 1;
      this.productsCart.push(this.product);
    }
    this.productService.updateCartContent(this.productsCart, true);
  }

}
