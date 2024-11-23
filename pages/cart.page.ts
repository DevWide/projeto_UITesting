import { Page } from '@playwright/test';
import selectors from '../selectors/selectors.json';

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkout(firstName: string, lastName: string, postalCode: string) {
    await this.page.click(selectors.cart.checkoutButton);
    await this.page.fill(selectors.cart.firstNameInput, firstName);
    await this.page.fill(selectors.cart.lastNameInput, lastName);
    await this.page.fill(selectors.cart.postalCodeInput, postalCode);
    await this.page.click(selectors.cart.continueButton);
    await this.page.click(selectors.cart.finishButton);
  }

  async getSuccessMessage() {
    return this.page.textContent(selectors.cart.successMessage);
  }
}
