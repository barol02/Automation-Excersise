import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { LoginPage } from '../src/pages/LoginPage';
import { ContactUsPage } from '../src/pages/ContactUsPage';

test.beforeEach(async ({ page }) => {
    // Blokujemy domeny serwujące reklamy (np. Google AdSense)
    await page.route('**/*google*ads**', route => route.abort());
    await page.route('**/*doubleclick.net/**', route => route.abort());
    await page.route('**/*adservice*/**', route => route.abort());
});

test('Contact Us Form', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const contactUsPage = new ContactUsPage(page);

    await page.goto('')
    
    await homePage.handleConsent();
    
    await homePage.navBar.navigateTo('Home');
    await homePage.navBar.verifyHomePageVisible();
    await homePage.navBar.navigateTo('SignupLogin');
    
    await loginPage.loginUser();
    
    await homePage.navBar.navigateTo('ContactUs');
    await contactUsPage.fillContactUsForm();
    await homePage.navBar.verifyHomePageVisible();
});