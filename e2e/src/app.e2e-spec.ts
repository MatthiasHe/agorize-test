import { AppPage } from './app.po';

describe('Agorize app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // Not finished
  it('should add a product twice in cart and remove it', () => {
    page.navigateTo();
    page.addProduct('.1');
    page.addProduct('.1');
    page.goToCart();
    expect(page.getProductQuantity('.1')).toEqual('X2');
    // page.removeProductFromCart('.1');
  });
});
