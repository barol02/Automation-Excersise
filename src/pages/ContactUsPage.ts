import { expect, type Locator, type Page } from '@playwright/test'
import { NavBar } from './NavBar.js';
import * as UserData from '../user-data';

export class ContactUsPage{
    readonly page: Page;
    readonly navBar: NavBar;

    get getInTouchHeader (): Locator { return this.page.getByText('Get In Touch'); }
    get nameInput (): Locator { return this.page.locator('[data-qa="name"]'); }
    get emailInput (): Locator { return this.page.locator('[data-qa="email"]'); }
    get subjectInput (): Locator { return this.page.locator('[data-qa="subject"]'); }
    get messageInput (): Locator { return this.page.locator('[data-qa="message"]'); }
    get uploadFileInput (): Locator { return this.page.locator('input[name="upload_file"]'); }
    get submitButton (): Locator { return this.page.locator('[data-qa="submit-button"]'); }
    get successMessage (): Locator {return this.page.locator('#contact-page').locator('.alert-success').getByText('Success! Your details have been submitted successfully.'); }
    get homeButton (): Locator { return this.page.locator('a.btn-success', { hasText: 'Home' }); }

    constructor(page:Page) {
        this.page = page;
        this.navBar = new NavBar(page);
    }

    async fillContactUsForm () {
        await expect(this.getInTouchHeader).toBeVisible();
        await this.nameInput.fill(UserData.USER_NAME);
        await this.emailInput.fill(UserData.USER_EMAIL);
        await this.subjectInput.fill('test');
        await this.messageInput.fill('test');
        await this.uploadFileInput.setInputFiles('./test-image.jpg');
        
        this.page.once('dialog', async dialog => {
        await dialog.accept();
        });
        await this.submitButton.click();

        await expect(this.successMessage).toBeVisible();
        await this.homeButton.click();
    }
}