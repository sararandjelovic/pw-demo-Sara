import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
 readonly page: Page;
 readonly signUpButton: Locator;
 readonly emailLoginInput: Locator;
 readonly passwordLoginInput: Locator;
 readonly loginLoginPageButton: Locator;

 constructor(page: Page) {
    this.page = page;
    this.signUpButton = page.locator('//a[@href="/signup"]');
    this.emailLoginInput = page.locator('//input[@name="email"]');
    this.passwordLoginInput = page.locator('//input[@name="password"]');
    this.loginLoginPageButton = page.locator('//button[@data-cy="login-submit"]');
 }

 async loginUser(email: string, password: string) {
   await this.emailLoginInput.fill(email);
   await this.passwordLoginInput.fill(password);
   await this.loginLoginPageButton.click();
}
}