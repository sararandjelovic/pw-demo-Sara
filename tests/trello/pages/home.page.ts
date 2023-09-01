import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
 readonly page: Page;
 readonly logOutButton: Locator;
 readonly createBoardInput: Locator;
 readonly listTitleInput: Locator;
 readonly addlistButton: Locator;
 readonly createCardButton: Locator;
 readonly cardTitleInput: Locator;
 readonly openCardButton: Locator;
 readonly cardDescriptionInput: Locator;
 readonly dueDateButton: Locator;
 readonly forwardArrowCalendarButton: Locator;
 readonly selectedDateButton: Locator;
 readonly closeEditPopUpButton: Locator;
 readonly boardOptionsButton: Locator;
 readonly deleteBoardButton: Locator;
 readonly boardDeletedPopUp: Locator;
 readonly userLoggedInPopUp: Locator;
 readonly userLoggedOutPopUp: Locator;


 constructor(page: Page) {
    this.page = page;
    this.logOutButton = page.locator('//div[@class="inline-block self-center pr-2 pl-1"]');
    this.createBoardInput = page.locator('//input[@data-cy="first-board"]');
    this.listTitleInput = page.locator('//input[@data-cy="add-list-input"]');
    this.addlistButton = page.locator('//button[contains(text(), "Add list")]');
    this.createCardButton = page.locator('//div[@data-cy="new-card"]');
    this.cardTitleInput = page.locator('//textarea[@data-cy="new-card-input"]');
    this.openCardButton = page.locator('//div[@data-cy="card"]');
    this.cardDescriptionInput = page.locator('//textarea[@data-cy="card-description"]');
    this.dueDateButton = page.locator('//div[@data-cy="calendar-button"]');
    this.forwardArrowCalendarButton = page.locator('(//div[@class="dp__inner_nav"])[2]');
    this.selectedDateButton = page.locator('//div[contains(text(), "15")]');
    this.closeEditPopUpButton = page.locator('//*[@data-cy="cancel"]');
    this.boardOptionsButton = page.locator('//button[@data-cy="board-options"]');
    this.deleteBoardButton = page.locator('//div[@data-cy="delete-board"]');
    this.boardDeletedPopUp = page.getByText('Board was deleted');
    this.userLoggedInPopUp =  page.getByText('User is logged in');
    this.userLoggedOutPopUp = page.getByText('User was logged out');
 }

 async createBoard(firstBoard: string){
   await this.createBoardInput.fill(firstBoard);
   await this.createBoardInput.press('Enter');
 }

 async createList(firstList: string){
   await this.listTitleInput.fill(firstList);
   await this.addlistButton.click();
 }

 async createFirstCard(firstCard: string){
   await this.createCardButton.click();
   await this.cardTitleInput.fill(firstCard);
   await this.cardTitleInput.press('Enter');
 }

 async editCard(cardDescription: string){
   await this.openCardButton.click();
   await this.cardDescriptionInput.fill(cardDescription);
   await this.dueDateButton.click();
   await this.forwardArrowCalendarButton.click();
   await this.selectedDateButton.click();
   await this.closeEditPopUpButton.click();
 }

 async addNewCard(secondCard: string){
   await this.createCardButton.click();
   await this.cardTitleInput.fill(secondCard);
   await this.cardTitleInput.click();
 }

 async deleteBoard(){
   await this.boardOptionsButton.click();
   await this.deleteBoardButton.click();
   await expect(this.boardDeletedPopUp).toBeVisible();
 }

};