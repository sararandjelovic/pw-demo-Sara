import { type Locator, type Page } from "@playwright/test";

export class GetStartedPage1 {
 readonly page: Page;
 readonly boardNameInput: Locator;

 constructor(page: Page) {
    this.page = page;
    this.boardNameInput = page.locator('//input[@name="newBoard"]');
 }

 async createBoard(boardname: string) {
    await this.boardNameInput.fill(boardname);
    await this.boardNameInput.press("Enter");
 }
};