import { expect } from '@wdio/globals'
import { selectors } from '../objects&Stuff/didTheyPass.js'
import loggingIn, { allUsernames, password } from '../objects&Stuff/theLogIn.js'


async function logIn(username, password) {
    loggingIn.open();
    await loggingIn.login(username, password);
    console.log(`Logged in as ${username}`);
}


allUsernames.forEach((username) => {
    it(`should do something after logging in as ${username}`, async () => {
        await logIn(username, password);
    });
});