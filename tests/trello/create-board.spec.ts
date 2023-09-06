import { test, expect } from '@playwright/test';
// import { GetStartedPage } from './pages/get-started.page';
import { HomePage } from './pages/home.page';

test.describe('Login test', () => {
    // let getStartedPage: GetStartedPage;
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        // getStartedPage = new GetStartedPage(page);
        homePage = new HomePage(page);
        await page.goto('/');
    });

    test('Create board with description, due date and upload attachment', async ({ page }) => {
        await homePage.createBoard('First Board');
        await homePage.createList('First List');
        await homePage.createFirstCard('First Card');
        await homePage.addDesciption('Description for card');

        const fileChooserPromise = page.waitForEvent('filechooser');
        await homePage.uploadImageButton.click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles('test.pdf');
        await expect(homePage.uploadedImagePopup).toBeVisible();
        await expect(page.locator('//div[@data-cy="image-attachment"]')).toContainText('test.pdf');

        await homePage.addDueDate();
        await homePage.addNewCard('test');
        await homePage.deleteBoard();
    });
});


