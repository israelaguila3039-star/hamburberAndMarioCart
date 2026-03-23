import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import thePlaceILogIn from '../stuff/loggingIn.js'


/**This function can control what is inputted for the password, username, the selector and the text within the selector
*This is due to neeeding to run multiple tests where the username and password are different and the assertions are different
*Notes: Errors can easily be caused by an update to the text, class names, src, etc...
*/

//All the valid usernames
const usernames = ["standard_user", "locked_out_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"];

async function theTestIng(username, password, passSelector, stringNeed, passText) {    
    
    describe('My Login application', () => {
        it('should login with valid credentials', async () => {
            await thePlaceILogIn.open()

            await thePlaceILogIn.login(username, password)            
            await expect($(passSelector)).toBeExisting();
            if (stringNeed == true){
                await expect($(passSelector)).toHaveText(                    
                    expect.stringContaining(passText));
            }
            
        })
    })

}


//Positive Tests:

for (i == 0; i < 6; i++){
    if (i == 1){
        theTestIng(usernames[i], "secret_sauce", '[class="error-message-container error"]', true, 'Epic sadface: Sorry, this user has been locked out.');
    } else if (i == 2 || i == 5) {
        theTestIng(usernames[i], "secret_sauce", '[src="/static/media/sl-404.168b1cce10384b857a6f.jpg"]', false, null);
    } else {
        theTestIng(usernames[i], "secret_sauce", '[class="app_logo"]', true, 'Swag Labs');
    }
}


//Negative Tests:

//Incorrect password
theTestIng("standard_user", "ppppppp", '[class="error-message-container error"]', true, 'Epic sadface: Username and password do not match any user in this service')
//Wrong username
theTestIng("lockedoutuser", "secret_sauce", '[class="error-message-container error"]', true, 'Epic sadface: Username and password do not match any user in this service');
//Wrong capitalization
theTestIng("Problem_User", "Secret_Sauce", '[class="error-message-container error"]', true, 'Epic sadface: Username and password do not match any user in this service');
//No password
theTestIng("performance_glitch_user", "", '[class="app_logo"]', true, 'Swag Labs');