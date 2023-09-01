import { type Locator, type Page } from "@playwright/test";

export class GetStartedPage {
 readonly page: Page;
 readonly loginButton: Locator;
 readonly getStartedText: Locator;
 readonly invalidEmailPopup: Locator;

 constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('//div[@data-cy="login-menu"]');
    this.getStartedText = page.locator('//h1');
    this.invalidEmailPopup = page.getByText('Email format is invalid');

 }
};