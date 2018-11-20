import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(destination?: string) {
    return browser.get('/' + destination);
  }

  addProduct(productId) {
    return element(by.css('.product-list')).element(by.css(productId)).element(by.css('.add-in-cart'));
  }

   goToCart() {
    return element(by.css('.navbar .navbar-actions .cart-action')).click();
  }

  removeProductFromCart(productId) {
    return element(by.css(productId)).element(by.css('.remove-action'));
  }

  getProductQuantity(productId) {
    return element(by.css('body')).element(by.css(productId)).element(by.css('.remove-action'));
  }
}
