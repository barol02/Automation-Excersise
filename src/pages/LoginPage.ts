import { expect, type Locator, type Page } from '@playwright/test'
import { NavBar } from './NavBar';
import * as UserData from '../user-data';

export class LoginPage{
    readonly page: Page;
    readonly navBar: NavBar;

    get loginTitle(): Locator { return this.page.getByText('Login to your account'); }
    get loginEmail(): Locator { return this.page.locator('form[action="/login"]').getByPlaceholder('Email Address'); }
    get loginPassword(): Locator { return this.page.locator('form[action="/login"]').getByPlaceholder('Password'); }
    get loginButton(): Locator { return this.page.getByRole('button', { name: 'Login' }); }
    get existingUserErrorMessage(): Locator { return this.page.getByText('Email Address already exist!'); }
    get loginErrorMessage(): Locator { return this.page.getByText('Your email or password is incorrect!'); }
    get signupTitle(): Locator { return this.page.getByText('New User Signup!'); }
    get signupName(): Locator { return this.page.locator('form[action="/signup"]').getByPlaceholder('Name'); }
    get signupEmail(): Locator { return this.page.locator('form[action="/signup"]').getByPlaceholder('Email Address'); }
    get signupButton(): Locator { return this.page.getByRole('button', { name: 'Signup' }); }

    constructor(page:Page) {
        this.page = page;
        this.navBar = new NavBar(page);
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/');
    }

    async signUpUser() {
        await expect(this.signupTitle).toBeVisible();
        await this.signupName.fill(UserData.USER_NAME);
        await this.signupEmail.fill(UserData.USER_EMAIL);
        await this.signupButton.click();
    }

    async signUpExistingUser() {
        await expect(this.signupTitle).toBeVisible();
        await this.signupName.fill(UserData.USER_NAME);
        await this.signupEmail.fill(UserData.USER_EMAIL);
        await this.signupButton.click();
        await expect(this.existingUserErrorMessage).toBeVisible();
    }

    async loginUser(email: string = UserData.USER_EMAIL, password: string = UserData.USER_PASSWORD) {
        await expect(this.loginTitle).toBeVisible();
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }
}