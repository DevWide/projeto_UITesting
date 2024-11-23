import { Page } from '@playwright/test';
import selectors from '../selectors/selectors.json';

export class InventoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async sortProducts(order: string) {
    await this.page.selectOption(selectors.inventory.productSortDropdown, order);
  }

  async addToCart() {
    await this.page.click(selectors.inventory.addToCartButton);
  }

  async goToCart() {
    await this.page.click(selectors.inventory.shoppingCartLink);
  }
}
