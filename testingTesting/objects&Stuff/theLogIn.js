import { $ } from '@wdio/globals';
import endLogin from './theEndWithAPoint.js';

//All the usernames that can be used and the password
export const allUsernames = ["standard_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"];
export const password = "secret_sauce";


//Selectors for the logging in tests
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

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}



export default new loggingIn();
