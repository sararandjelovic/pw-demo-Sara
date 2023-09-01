import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';
import { HomePage } from './pages/home.page';

test('Created board', async ({ page }) => {
    const getStartedPage = new GetStartedPage(page);
    const homePage = new HomePage(page);
    
    await test.step('Open Url', async () => {
        await getStartedPage.openUrl();
      });
    
    await test.step('Create Board with cards and add description for card', async () => {
        await homePage.createBoard('First Board');
        await homePage.createList('First List');
        await homePage.createFirstCard('First Card');
        await homePage.editCard('Description for card');
        await homePage.addNewCard('Second Card');
    });

    await test.step('Delete board', async() => {
        await homePage.deleteBoard();
    });


});

