import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  productsInCart: number;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productsInCart = this.productService.initializeCart();
    this.productService.getCartNumber().subscribe(info => {
      this.productsInCart = info.productsNumber;
    });
  }

}
