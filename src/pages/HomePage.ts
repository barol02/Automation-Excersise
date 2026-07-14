import { expect, type Locator, type Page } from '@playwright/test'
import { NavBar } from './NavBar.js';

export class HomePage{
    readonly page: Page;
    readonly navBar: NavBar;

    constructor(page:Page) {
        this.page = page;
        this.navBar = new NavBar(page);
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/');
    }

    async handleConsent() {
    await this.page.addLocatorHandler(this.page.getByText('This site asks for consent to use your data'), async () => {
        await this.page.getByRole('button', {name: 'Consent'}).click();
    })}

    async DeleteAccount(){
        await this.navBar.navigateTo('DeleteAccount');
        await expect(this.page.getByText('ACCOUNT DELETED!')).toBeVisible();
        await this.page.getByRole('link', {name: 'Continue'}).click();
    }
}//class Home Page