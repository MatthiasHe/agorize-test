import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductInCart, ProductService} from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  private cartSubscription: any;

  cartContent: ProductInCart[];
  isEmpty: boolean;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.cartContent = this.productService.getCartContent();
    this.isEmpty = !this.cartContent.length;
    this.cartSubscription = this.productService.getCartNumber().subscribe(info => {
      this.isEmpty = !info.productsNumber;
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
