import BaseComponent from "./BaseComponent"
export default class RegistrationForm extends BaseComponent{
    constructor(page){
        super(page, '.modal-content')
    }
    name(){
        return this.locator('#signupName')
    }
    lastName(){
        return this.locator('#signupLastName')
    }
    email(){
        return this.locator('#signupEmail')
    }
    password(){
        return this.locator('#signupPassword')
    }
    repeatPassword(){
        return this.locator('#signupRepeatPassword')
    }
    registerButton() {
    return this.byText('Register')
    }
    
    async fillRegistrationForm({name,lastName,email,password,repeatPassword}){
        await this.name().fill(name)
        await this.lastName().fill(lastName)
        await this.email().fill(email)
        await this.password().fill(password)
        await this.repeatPassword().fill(repeatPassword)
    }
}
