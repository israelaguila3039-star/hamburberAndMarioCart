import { expect } from '@wdio/globals'
import passers from '../objects&Stuff/didTheyPass.js'
import hamburberNoCheese from '../objects&Stuff/hamburber.js'
import loggingIn from '../objects&Stuff/theLogIn.js'


//Function used to loop through each username
async function logIn(username, password) {
    loggingIn.open();
    await loggingIn.login(username, password);
    console.log(`Logged in as ${username}`);
}



//Hamburger open menu
loggingIn.allUsernames.forEach((username) => {
    it(`should do something after logging in as ${username}`, async () => {
        await logIn(username, loggingIn.password);
        await expect($(passers.pass.appLogo)).toBeExisting();
        hamburberNoCheese.paths.forEach((path) => {
            hamburberNoCheese.open(path);
            hamburberNoCheese.menuButton.click();
            expect($(passers.pass.hamburberOpen)).toBeExisting();
        })
    });
});