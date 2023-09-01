import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';
import { LoginPage } from './pages/login.page';
import { RegisterPage } from './pages/register.page';
import { HomePage } from './pages/home.page';
import { Utils } from './pages/utils';

const signUpEemail = `test${Utils.getRandomNumber()}@mail.com`;
const signupPassword = `Password${Utils.getRandomNumber()}`;
const invalidEmail = "bad email";
const invalidPassword = "bad password";
const testUserEmail = "test@test.com";
const testUserPassword = "123456";

  test.describe('Sign up tests', () => {
    let getStartedPage: GetStartedPage;
    let loginPage: LoginPage;
    let registerPage: RegisterPage;
    let homePage: HomePage;

    test.beforeEach(async ({ page }, testInfo) => {
      getStartedPage = new GetStartedPage(page);
      loginPage = new LoginPage(page);
      registerPage = new RegisterPage(page);
      homePage = new HomePage(page);
      
      await page.goto('/');
    });

    test('SignUp with the valid credentials and log out', async ({ page }) => {
      await getStartedPage.loginButton.click();
      await loginPage.signUpButton.click();
      await registerPage.createUser(signUpEemail, signupPassword);
      await expect(homePage.userLoggedInPopUp).toBeVisible();
      await expect(homePage.logOutButton).toHaveText(signUpEemail);
      await homePage.logOutButton.click();
      await expect(homePage.userLoggedOutPopUp).toBeVisible();
    });

    test('SignUp with invalid credenitals', async ({page}) => {
      await getStartedPage.loginButton.click();
      await loginPage.signUpButton.click();
      await registerPage.createUser(invalidEmail, invalidPassword);
      await expect(getStartedPage.invalidEmailPopup).toBeVisible();
    })

    // test('Create User for other tests', async ({page}) => {
    //   await getStartedPage.loginButton.click();
    //   await loginPage.signUpButton.click();
    //   await registerPage.createUser(testUserEmail, testUserPassword);
    //   await homePage.logOutButton.click();
    // })

    test('Create user with already used email', async ({page}) => {
      await getStartedPage.loginButton.click();
      await loginPage.signUpButton.click();
      await registerPage.createUser(testUserEmail, testUserPassword);
      await expect(homePage.emailExistsPopup).toBeVisible();
    })
    
});