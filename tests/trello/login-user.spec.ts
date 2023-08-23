import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';
import { LoginPage } from './pages/login.page';
import { HomePage } from './pages/home.page';

test('Login User', async ({ page }) => {
    const getStartedPage = new GetStartedPage(page);
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await getStartedPage.openUrl();
    await expect(getStartedPage.getStartedText).toHaveText(' Get started! ');
    await getStartedPage.loginButton.click();
    await loginPage.loginUser("test@sara.com", "123456");
    await expect(homePage.logOutButton).toHaveText("test@sara.com");
    await homePage.logOutButton.click();

});