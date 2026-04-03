import { $ } from '@wdio/globals';
import endLogin from './theEndWithAPoint.js';





//Selectors & values for the logging in
class loggingIn extends endLogin {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get password () {
        return "secret_sauce";
    }
    
    get allUsernames () {
        return ["standard_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"];
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}



export default new loggingIn();
