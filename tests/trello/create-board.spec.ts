import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';
import { LoginPage } from './pages/login.page';
import { RegisterPage } from './pages/register.page';
import { HomePage } from './pages/home.page';

test('Created board', async ({ page }) => {
    const getStartedPage = new GetStartedPage(page);
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page); 
    const homePage = new HomePage(page);
    
    await getStartedPage.openUrl();
    await getStartedPage.loginButton.click();
    await loginPage.loginUser("test@sara.com", "123456");
    await homePage.createBoard('First Board');
    await homePage.createList('First List');
    await homePage.createFirstCard('First Card');
    await homePage.editCard('Description for card');
    await homePage.addNewCard('Second Card');
    await homePage.deleteBoard();
    await homePage.logOutButton.click();

});

