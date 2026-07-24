import { expect, type Locator, type Page } from '@playwright/test'
import { NavBar } from './NavBar.js';

export class HomePage{
    readonly page: Page;
    readonly navBar: NavBar;

    get consentMessage(): Locator { return this.page.getByText('This site asks for consent to use your data'); }
    get consentButton(): Locator { return this.page.getByRole('button', { name: 'Consent' }); }

    constructor(page:Page) {
        this.page = page;
        this.navBar = new NavBar(page);
    }

    async handleConsent() {
        await this.page.addLocatorHandler(this.consentMessage, async () => {
            await this.consentButton.click();
        });
    }
}//class Home Page