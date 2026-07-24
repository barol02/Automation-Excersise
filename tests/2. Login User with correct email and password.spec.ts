import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { LoginPage } from '../src/pages/LoginPage';

test('Login User with incorrect email and password', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await page.goto('');
    
    await homePage.handleConsent();
    
    await homePage.navBar.navigateTo('Home');
    await homePage.navBar.verifyHomePageVisible();
    await homePage.navBar.navigateTo('SignupLogin');
    
    await loginPage.loginUser();
});