import { test, expect, chromium, Browser, BrowserContext } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { faker } from '@faker-js/faker'; // Importa o faker-js

test.describe.configure({ mode: 'serial' });

let browser: Browser;
let context: BrowserContext;

test.beforeAll(async () => {
  browser = await chromium.launch({ headless: true, slowMo: 500 });
  test.setTimeout(60000);
});

test.beforeEach(async () => {
  context = await browser.newContext();
});

test.afterEach(async () => {
  await context.close();
});

test.afterAll(async () => {
  await browser.close();
});

test.describe('Sauce Demo UI Tests', () => {
  test('Login com usuário válido e fluxo de compra', async () => {
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Login com dados fixos (pode ser dinâmico também, se necessário)
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('/inventory.html');

    // Gera dados aleatórios para o checkout
    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomPostalCode = faker.address.zipCode();

    // Adicionar produto ao carrinho e finalizar compra
    await inventoryPage.addToCart();
    await inventoryPage.goToCart();
    await cartPage.checkout(randomFirstName, randomLastName, randomPostalCode);
    const successMessage = await cartPage.getSuccessMessage();
    expect(successMessage).toBe('Thank you for your order!');
  });

  test('Login com credenciais inválidas', async () => {
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    // Gera credenciais inválidas aleatórias
    const randomUsername = faker.internet.userName();
    const randomPassword = faker.internet.password();

    await loginPage.navigate();
    await loginPage.login(randomUsername, randomPassword);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Username and password do not match');
  });
});
