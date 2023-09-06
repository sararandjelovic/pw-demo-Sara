import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';
import { LoginPage } from './pages/login.page';
import { RegisterPage } from './pages/register.page';
import { HomePage } from './pages/home.page';
import users from './data/user-data';

  test.describe('Sign up tests', () => {
    let getStartedPage: GetStartedPage;
    let loginPage: LoginPage;
    let registerPage: RegisterPage;
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
      getStartedPage = new GetStartedPage(page);
      loginPage = new LoginPage(page);
      registerPage = new RegisterPage(page);
      homePage = new HomePage(page);
      
      await page.goto('/');
    });

    test('SignUp with the valid credentials and log out', async () => {
      await getStartedPage.loginButton.click();
      await loginPage.signUpButton.click();
      await registerPage.createUser(
        users.validUser.Email,
        users.validUser.Password
      );
      await expect(homePage.userLoggedInPopUp).toBeVisible();
      await expect(homePage.logOutButton).toHaveText(users.validUser.Email);
      await homePage.logOutButton.click();
      await expect(homePage.userLoggedOutPopUp).toBeVisible();
    });

    test('SignUp with invalid credenitals', async () => {
      await getStartedPage.loginButton.click();
      await loginPage.signUpButton.click();
      await registerPage.createUser(
        users.invalidUser.Email,
        users.invalidUser.Password
      );
      await expect(getStartedPage.invalidEmailPopup).toBeVisible();
    })

    test('Create User for other tests', async () => {
      await getStartedPage.loginButton.click();
      await loginPage.signUpButton.click();
      await registerPage.createUser(
        users.testUser.Email,
        users.testUser.Password
      );
      await homePage.logOutButton.click();
    })

    test('Create user with already used email', async () => {
      await getStartedPage.loginButton.click();
      await loginPage.signUpButton.click();
      await registerPage.createUser(
        users.testUser.Email,
        users.testUser.Password
      );
      await expect(homePage.emailExistsPopup).toBeVisible();
    })
    
});