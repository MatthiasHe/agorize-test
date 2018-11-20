import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductInCart, ProductService} from '../../services/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  private cartSubscription: Subscription;

  cartContent: ProductInCart[];
  isEmpty: boolean;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.cartContent = this.productService.getCartContent();
    this.isEmpty = !this.cartContent.length;
    this.cartSubscription = this.productService.getCartNumber().subscribe(number => {
      this.isEmpty = !number;
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
