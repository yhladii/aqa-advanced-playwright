import BasePage from "./BasePage";
export default class RegistrationPage extends BasePage {
    constructor (page){
        super(page)
    }
    async openRegistration(){
        await this.visit('https://guest:welcome2qauto@qauto.forstudy.space/'),
        await this.clickByText('Sign in'),
        await this.clickByText('Registration')
    }
}