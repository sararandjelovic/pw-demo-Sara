import { type Locator, type Page } from "@playwright/test";

export class RegisterPage {
 readonly page: Page;
 readonly emailRegisterInput: Locator;
 readonly passwordRegisterInput: Locator;
 readonly welcomeEmailCheckbox: Locator;
 readonly createAccountButton: Locator;

 constructor(page: Page) {
    this.page = page;
    this.emailRegisterInput = page.locator('//input[@name="email"]');
    this.passwordRegisterInput = page.locator('//input[@name="password"]');
    this.welcomeEmailCheckbox = page.locator('//input[@name="welcomeEmail"]');
    this.createAccountButton = page.locator('//button[@data-cy="signup-submit"]');
}

 async createUser(signUpEemail: string, signupPassword: string) {
    await this.emailRegisterInput.fill(signUpEemail);
    await this.passwordRegisterInput.fill(signupPassword);
    await this.welcomeEmailCheckbox.check();
    await this.createAccountButton.click();
 }
};