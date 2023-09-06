import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';
import { LoginPage } from './pages/login.page';
import { HomePage } from './pages/home.page';
import users from './data/user-data';

test.describe('Login test', () => {
    let getStartedPage: GetStartedPage;
    let loginPage: LoginPage;
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        getStartedPage = new GetStartedPage(page);
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await page.goto('/');
    });

    test('SignUp with the valid credentials and log out', async () => {
        await expect(getStartedPage.getStartedText).toHaveText(' Get started! ');
        await getStartedPage.loginButton.click();
        await loginPage.loginUser(users.testUserEmail, users.testUserPassword);
        await expect(homePage.userLoggedInPopUp).toBeVisible();
        await expect(homePage.logOutButton).toHaveText(users.testUserEmail);
        await homePage.logOutButton.click();
        await expect(homePage.userLoggedOutPopUp).toBeVisible();
    })

    test('SignUp with the invalid credentials', async () => {
        await getStartedPage.loginButton.click();
        await loginPage.loginUser(users.invalidEmail, users.invalidPassword);
        await expect(homePage.invalidUserPopup).toBeVisible();
    })

});
