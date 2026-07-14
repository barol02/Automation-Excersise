import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { LoginPage } from '../src/pages/LoginPage';
import { SignUpPage } from '../src/pages/SignUpPage';

let url='https://automationexercise.com/';

test('Register User', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signUpPage = new SignUpPage(page);
    await homePage.goto();
    
    await homePage.handleConsent();
    
    await homePage.navBar.navigateTo('Home');
    await homePage.navBar.verifyHomePageVisible();
    await homePage.navBar.navigateTo('SignupLogin');
    
    await loginPage.signUpUser();
    
    await signUpPage.enterAccountInformation();
    await signUpPage.VerifyAccountCreated();
    await homePage.DeleteAccount();
});