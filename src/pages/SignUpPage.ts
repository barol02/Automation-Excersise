import { expect, type Locator, type Page } from '@playwright/test'
import { NavBar } from './NavBar';
import * as UserData from '../user-data';

export class SignUpPage{
    readonly page: Page;
    readonly navBar: NavBar;

    get TitleMan(): Locator { return this.page.getByRole('radio', {name: ' Mr. '}); }
    get TitleMiss(): Locator { return this.page.getByRole('radio', {name: ' Mrs. '}); }
    get Name(): Locator { return this.page.locator('[data-qa="name"]'); }
    get Email(): Locator { return this.page.locator('[data-qa="email"]'); }
    get Password(): Locator { return this.page.locator('[data-qa="password"]'); }

    get BirthDay(): Locator { return this.page.locator('[data-qa="days"]'); }
    get BirthMonth(): Locator { return this.page.locator('[data-qa="months"]'); }
    get BirthYear(): Locator { return this.page.locator('[data-qa="years"]'); }

    get FirstName(): Locator { return this.page.locator('[data-qa="first_name"]'); }
    get LastName(): Locator { return this.page.locator('[data-qa="last_name"]'); }
    get Company(): Locator { return this.page.locator('[data-qa="company"]'); }
    get Address(): Locator { return this.page.locator('[data-qa="address"]'); }
    get Address2(): Locator { return this.page.locator('[data-qa="address2"]'); }
    get Country(): Locator { return this.page.locator('[data-qa="country"]'); }
    get State(): Locator { return this.page.locator('[data-qa="state"]'); }
    get City(): Locator { return this.page.locator('[data-qa="city"]'); }
    get Zipcode(): Locator { return this.page.locator('[data-qa="zipcode"]'); }
    get MobileNumber(): Locator { return this.page.locator('[data-qa="mobile_number"]'); }
    get CreateAccountButton(): Locator { return this.page.locator('[data-qa="create-account"]'); }

    get AccountCreatedMessage(): Locator {return this.page.getByText('Account Created!'); }
    get ContinueButton(): Locator {return this.page.locator('[data-qa="continue-button"]');}

    constructor(page:Page) {
        this.page = page;
        this.navBar = new NavBar(page);
        
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/');
    }

    async enterAccountInformation(){
        await expect(this.page.locator('.login-form').getByText('Enter Account Information')).toBeVisible();
            await this.TitleMan.click();
            await this.Name.fill(UserData.USER_NAME);
            await expect(this.Email).toHaveValue(UserData.USER_EMAIL);
            await this.Password.fill(UserData.USER_PASSWORD);
            await this.BirthDay.selectOption(UserData.USER_BIRTH_DAY);
            await this.BirthMonth.selectOption(UserData.USER_BIRTH_MONTH);
            await this.BirthYear.selectOption(UserData.USER_BIRTH_YEAR);
            // personal/address fields
            await this.FirstName.fill(UserData.USER_FIRST_NAME);
            await this.LastName.fill(UserData.USER_LAST_NAME);
            await this.Company.fill(UserData.COMPANY);
            await this.Address.fill(UserData.USER_ADDRESS1);
            await this.Address2.fill(UserData.USER_ADDRESS2);
            await this.Country.selectOption({label: UserData.USER_COUNTRY});
            await this.State.fill(UserData.USER_STATE);
            await this.City.fill(UserData.USER_CITY);
            await this.Zipcode.fill(UserData.USER_ZIPCODE);
            await this.MobileNumber.fill(UserData.USER_MOBILE_NUMBER);
            await this.page.getByLabel('Sign up for our newsletter!').check();
            await this.page.getByLabel('Receive special offers from our partners!').check();
            await this.CreateAccountButton.click();
        }
    
        async VerifyAccountCreated(){
            await expect(this.AccountCreatedMessage).toBeVisible();
            await this.ContinueButton.click();
        }
        

}