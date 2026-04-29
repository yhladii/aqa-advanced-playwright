import BasePage from "./BasePage";
export default class RegistrationPage extends BasePage {
    constructor (page){
        super(page)
    }
    async openRegistration(){
        await this.visit('/'),
        await this.clickByText('Sign In'),
        await this.clickByText('Registration')
    }
}