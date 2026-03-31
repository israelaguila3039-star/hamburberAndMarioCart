import { expect } from '@wdio/globals'
import passers from '../objects&Stuff/didTheyPass.js'
import hamburberNoCheese from '../objects&Stuff/hamburber.js'
import loggingIn from '../objects&Stuff/theLogIn.js'
import shopCart from '../objects&Stuff/shoppingCart.js'


//Function used to loop through each username
async function logIn(username, password) {
    loggingIn.open();
    await loggingIn.login(username, password);
    console.log(`Logged in as ${username}`);
}



//Hamburger open menu and login
//Base for each hamburger menu test
// loggingIn.allUsernames.forEach((username) => {
//     it(`should do something after logging in as ${username}`, async () => {
//         await logIn(username, loggingIn.password);
//         //Check if login worked
//         await expect($(passers.pass.appLogo)).toBeExisting();
//         for (const path of hamburberNoCheese.paths) {
//             await hamburberNoCheese.open(path);
//             await hamburberNoCheese.menuButton.click();

//             // Check if menu opened
//             await expect($(passers.pass.hamburberOpen)).toBeExisting();
//         }
//     });
// });

//Click each link/button for hamburger menu
// loggingIn.allUsernames.forEach((username) => {
//     it(`should do something after logging in as ${username}`, async () => {
//         await logIn(username, loggingIn.password);
//         for (const path of hamburberNoCheese.paths) {
//             //Loops through each button needed to be clicked and some necesitate their respective pages to be reloaded due to the links taking them elsewhere
//             //Different pages, different passing conditions
//             for (let i = 0; i < hamburberNoCheese.hamburberButtons.length; i++) {
//                 const button = hamburberNoCheese.hamburberButtons[i];

//                 await hamburberNoCheese.open(path);
//                 await hamburberNoCheese.menuButton.click();
//                 await button.click();

//                 if (i === 7) {
//                     //await expect($(passers.pass.about)).toHaveTextContaining("The World's Only Full-Lifecycle AI-Quality Platform");
//                 } else if (i === 2) {
//                     await expect($(passers.pass.loginLogo)).toBeExisting();
//                     await logIn(username, loggingIn.password);
//                 } else if (i === 3) {
//                     await expect($(passers.pass.hamburgerClosed)).toBeExisting();
//                 } else {
//                     await expect($(passers.pass.appLogo)).toBeExisting();
//                 }
//             }
//         }
//     });
// });

//Hamburger menu clicking outside of menu


//Hamburger menu clicking link outside of menu


//Shopping cart page button
loggingIn.allUsernames.forEach((username) => {
    it(`should do something after logging in as ${username}`, async () => {
        await logIn(username, loggingIn.password);
        for (const path of hamburberNoCheese.paths) {
            await shopCart.open(path);
            await shopCart.cartButton.click();
            await expect($x(passers.pass.cartPage)).toBeExisting();
        }
    });
});

//Checkout with no items
loggingIn.allUsernames.forEach((username) => {
    it(`should do something after logging in as ${username}`, async () => {
        await logIn(username, loggingIn.password);
        await shopCart.open(shopCart.paths[1]);
        await shopCart.checkoutButton.click();
        await expect($x(passers.pass.checkoutPage)).toBeExisting();
    });
});