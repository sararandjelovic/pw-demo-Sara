import { test, expect } from '@playwright/test';
import { GetStartedPage1 } from './pages/get-started.page1';


test('Open URL', async ({ page }) => {
    const getStartedPage1 = new GetStartedPage1(page);

  await page.goto('http:/localhost:3000/');
  await expect(page.locator('//div[@class="grid content-center"]/h1')).toHaveText("Get started!");

  await getStartedPage1.createBoard("Sara");

  await page.locator('//input[@data-cy="add-list-input"]').fill("Test");
  await page.locator('//button[contains(text(),"Add list")]').click();


});
