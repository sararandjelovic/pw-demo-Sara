import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';
import { LoginPage } from './pages/login.page';
import { HomePage } from './pages/home.page';
import { Utils } from './pages/utils';

const testUserEmail = "test@test.com";
const testUserPassword = "123456";
const invalidEmail = "bad email";
const invalidPassword = "bad password";

test.describe('Login test', () => {
    let getStartedPage: GetStartedPage;
    let loginPage: LoginPage;
    let homePage: HomePage;

    test.beforeEach(async ({ page }, testInfo) => {
        getStartedPage = new GetStartedPage(page);
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await page.goto('/');
    });

    test('SignUp with the valid credentials and log out', async ({ page }) => {
        await expect(getStartedPage.getStartedText).toHaveText(' Get started! ');
        await getStartedPage.loginButton.click();
        await loginPage.loginUser(testUserEmail, testUserPassword);
        await expect(homePage.userLoggedInPopUp).toBeVisible();
        await expect(homePage.logOutButton).toHaveText(testUserEmail);
        await homePage.logOutButton.click();
        await expect(homePage.userLoggedOutPopUp).toBeVisible();
    })

    test('SignUp with the invalid credentials', async ({ page }) => {
        await getStartedPage.loginButton.click();
        await loginPage.loginUser(invalidEmail, invalidPassword);
        await expect(homePage.invalidUserPopup).toBeVisible();
    })

});
