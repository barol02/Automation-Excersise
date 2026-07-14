import { expect, type Locator, type Page } from '@playwright/test'
import { NavBar } from './NavBar';
import * as UserData from '../user-data';

export class LoginPage{
    readonly page: Page;
    readonly navBar: NavBar;
    readonly login: {
        readonly Email: Locator;
    }
    readonly signup: {
        readonly Signup: Locator;
        readonly Name: Locator;
        readonly Email: Locator;
        readonly SignupButton: Locator;
    }
    constructor(page:Page) {
        this.page = page;
        this.navBar = new NavBar(page);
        this.login = {
            Email: page.locator('form[action="/login"]').getByPlaceholder('Email Address'),
        }
        this.signup ={
            Signup: page.getByText('New User Signup!'),
            Name: page.locator('form[action="/signup"]').getByPlaceholder('Name'),
            Email: page.locator('form[action="/signup"]').getByPlaceholder('Email Address'),
            SignupButton: page.getByRole('button', {name: 'Signup'}),
        }
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/');
    }

    async signUpUser() {
        await expect(this.signup.Signup).toBeVisible();
        await this.signup.Name.fill(UserData.USER_NAME);
        await this.signup.Email.fill(UserData.USER_EMAIL);
        await this.signup.SignupButton.click();
    }

}