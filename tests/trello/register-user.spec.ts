import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/get-started.page';
import { LoginPage } from './pages/login.page';
import { RegisterPage } from './pages/register.page';
import { HomePage } from './pages/home.page';

test('Register User', async ({ page }) => {
    const getStartedPage = new GetStartedPage(page);
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page); 
    const homePage = new HomePage(page);
    
  await getStartedPage.openUrl();
  await getStartedPage.loginButton.click();
  await loginPage.signUpButton.click();
  await registerPage.createUser("sara@test.com", "123456");
  await expect(homePage.logOutButton).toHaveText("sara@test.com");
  await homePage.logOutButton.click();

});