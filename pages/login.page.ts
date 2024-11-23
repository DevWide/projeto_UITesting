import { Page } from '@playwright/test';
import selectors from '../selectors/selectors.json';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill(selectors.login.usernameInput, username);
    await this.page.fill(selectors.login.passwordInput, password);
    await this.page.click(selectors.login.loginButton);
  }

  async getErrorMessage() {
    return this.page.textContent(selectors.login.errorMessage);
  }
}
