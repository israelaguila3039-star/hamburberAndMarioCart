import { $ } from '@wdio/globals'
import uRL from './theEndpointAtTheTop.js';

/*The usernames in the 2d array below:
*Valid usernames, usernames without '_', usernames that are all capitalized, usernames with a space instead of a '_', usernames where each first letter of a word is capitalized
*/
export const allUsernames = [
    ["standard_user", "locked_out_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"],
    ["standarduser", "lockedoutuser", "problemuser", "performanceglitchuser", "erroruser", "visualuser"],
    ["STANDARD_USER", "LOCKED_OUT_USER", "PROBLEM_USER", "PERFORMANCE_GLITCH_USER", "ERROR_USER", "VISUAL_USER"],
    ["standard user", "locked out user", "problem user", "performance glitch user", "error user", "visual user"],
    ["Standard_User", "Locked_Out_User", "Problem_User", "Performance_Glitch_User", "Error_User", "Visual_User"]
];



//Selectors for the logging in tests
class thePlaceILogIn extends uRL {

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

export default new thePlaceILogIn();
