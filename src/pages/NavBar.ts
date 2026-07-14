import { expect, type Locator, type Page } from '@playwright/test';

export class NavBar {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    get Home(): Locator { return this.page.getByRole('link', { name: 'Home' }); }
    get Products(): Locator { return this.page.getByRole('link', { name: 'Products' }); }
    get Cart(): Locator { return this.page.getByRole('link', { name: 'Cart' }); }
    get SignupLogin(): Locator { return this.page.getByRole('link', { name: 'Signup / Login' }); }
    get TestCases(): Locator { return this.page.getByRole('link', { name: 'Test Cases' }); }
    get APITesting(): Locator { return this.page.getByRole('link', { name: 'API Testing' }); }
    get VideoTutorials(): Locator { return this.page.getByRole('link', { name: 'Video Tutorials' }); }
    get ContactUs(): Locator { return this.page.getByRole('link', { name: 'Contact us' }); }
    get LoggedInAs(): Locator { return this.page.getByRole('link', { name: /^Logged in as/ }); }
    get Logout(): Locator { return this.page.getByRole('link', { name: 'Logout' }); }
    get DeleteAccount(): Locator { return this.page.getByRole('link', { name: 'Delete Account' }); }

    async navigateTo(name: string, ) {
        const targetLink: Locator = (this as any)[name];
        await targetLink.click();
    }

    async verifyHomePageVisible () {
        await expect(this.Home).toHaveCSS('color', 'rgb(255, 165, 0)');
    }
}