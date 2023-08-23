import { type Locator, type Page } from "@playwright/test";

export class GetStartedPage {
 readonly page: Page;
 readonly loginButton: Locator;
 readonly getStartedText: Locator;

 constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('//div[@data-cy="login-menu"]');
    this.getStartedText = page.locator('//h1');
 }

 async openUrl(){
   this.page.goto('http:/localhost:3000/');
 }
};