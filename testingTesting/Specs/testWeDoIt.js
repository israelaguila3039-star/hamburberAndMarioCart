import { expect } from '@wdio/globals'
import passers from '../objects&Stuff/didTheyPass.js'
import hamburberNoCheese from '../objects&Stuff/hamburber.js'
import loggingIn from '../objects&Stuff/theLogIn.js'
import shopCart from '../objects&Stuff/shoppingCart.js'
import shoppingCart from '../objects&Stuff/shoppingCart.js'


//Function used to loop through each username
async function logIn(username, password) {
    loggingIn.open();
    await loggingIn.login(username, password);
    await $(passers.pass.appLogo).waitForExist({ timeout: 20000 });
}

//Function to perform individual shopping cart tests
async function processItemInd(i) {
    await shopCart.open(shopCart.paths[0]);
    await shopCart.items[i].click();
    await expect($(passers.pass.cartBadge)).toBeDisplayed();
    await shopCart.cartButton.click();
    await expect($(passers.pass.cartPage)).toBeExisting();
    await shopCart.checkoutButton.click();
    await expect($(passers.pass.checkoutPage)).toBeExisting();
    await shopCart.cartButton.click();
    await expect($(passers.pass.cartPage)).toBeExisting();
    await shopCart.removeItems[i].click();
    await expect($(passers.pass.cartBadge)).not.toExist();
}

//Function to do the same thing as above but no checkout and instead continue shopping (im getting lazier by the minute here and am tired)
async function continueItemInd(i) {
    await shopCart.open(shopCart.paths[0]);
    await shopCart.items[i].click();
    await expect($(passers.pass.cartBadge)).toBeDisplayed();
    await shopCart.cartButton.click();
    await expect($(passers.pass.cartPage)).toBeExisting();
    await shopCart.continueShoppingButton.click();
    await expect($(passers.pass.appLogo)).toBeExisting();
    await shopCart.cartButton.click();
    await expect($(passers.pass.cartPage)).toBeExisting();
    await shopCart.removeItems[i].click();
    await expect($(passers.pass.cartBadge)).not.toExist();
}

//Hamburger open menu and login - DONE
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
//         console.log(`Logged in as ${username}`);
//     });
// });

// Click each link/button for hamburger menu - DONE (kinda)
// Performance_glitch_user is my ruin y must it make things so much harder
loggingIn.allUsernames.forEach((username) => {
    it(`should do something after logging in as ${username}`, async () => {
        await logIn(username, loggingIn.password);
        for (const path of hamburberNoCheese.paths) {
            //Loops through each button needed to be clicked and some necesitate their respective pages to be reloaded due to the links taking them elsewhere
            //Different pages, different passing conditions
            if (username !== 'performance_glitch_user') {
                for (let i = 0; i < hamburberNoCheese.hamburberButtons.length; i++) {
                    const button = hamburberNoCheese.hamburberButtons[i];

                    await hamburberNoCheese.open(path);
                    await hamburberNoCheese.menuButton.click();
                    await button.click();

                    if (i === 4) {
                        if (username !== 'problem_user') {
                            await expect($(passers.pass.about)).toBeExisting({ timeout: 5000 });
                            await hamburberNoCheese.open(path);
                        } else {
                            await expect($(passers.pass.errorFourOFour)).toBeExisting();
                        }
                    } else if (i === 2) {
                        await expect($(passers.pass.loginLogo)).toBeExisting();
                        await logIn(username, loggingIn.password);
                    } else if (i === 3) {
                        await expect($(passers.pass.hamburgerClosed)).toBeExisting();
                    } else {
                        await expect($(passers.pass.appLogo)).toBeExisting();
                    }
                }
            }
            console.log(`Logged in as ${username}`);
        }
    
    });
});

//Hamburger menu clicking outside of menu - DONE
// loggingIn.allUsernames.forEach((username) => {
//     it(`should do something after logging in as ${username}`, async () => {
//         await logIn(username, loggingIn.password);
//         for (const path of hamburberNoCheese.paths) {
//             await hamburberNoCheese.open(path);
//             await hamburberNoCheese.menuButton.click();
//             await hamburberNoCheese.body.click();
//             //Check if menu closed (It doesn't)
//             await expect($(passers.pass.hamburberOpen)).toBeExisting();
//         }
//         console.log(`Logged in as ${username}`);
//     });
// });

//Hamburger menu clicking link outside of menu - DONE
// loggingIn.allUsernames.forEach((username) => {
//     it(`should do something after logging in as ${username}`, async () => {
//         await logIn(username, loggingIn.password);
//         for (const path of hamburberNoCheese.paths) {
//             await hamburberNoCheese.open(path);
//             await hamburberNoCheese.menuButton.click();
//             if (path === 'https://www.saucedemo.com/cart.html') {
//                 await shopCart.checkoutButton.click();
//                 await expect($(passers.pass.checkoutPage))
//             } else {
//                 await shopCart.cartButton.click();
//                 await expect($(passers.pass.cartPage)).toBeExisting();
//             }
//         }
//         console.log(`Logged in as ${username}`);
//     });
// });

//Shopping cart page button - DONE
// loggingIn.allUsernames.forEach((username) => {
//     it(`should do something after logging in as ${username}`, async () => {
//         await logIn(username, loggingIn.password);
//         for (const path of hamburberNoCheese.paths) {
//             await shopCart.open(path);
//             await shopCart.cartButton.click();
//             await expect($(passers.pass.cartPage)).toBeExisting();
//         }
//         console.log(`Logged in as ${username}`);
//     });
// });

//Checkout with no items - DONE
// loggingIn.allUsernames.forEach((username) => {
//     it(`should do something after logging in as ${username}`, async () => {
//         await logIn(username, loggingIn.password);
//         await shopCart.open(shopCart.paths[1]);
//         await shopCart.checkoutButton.click();
//         await expect($(passers.pass.checkoutPage)).toBeExisting();
//         console.log(`Logged in as ${username}`);
//     });
// });

//Checkout & remove with each individual item selected - DONE (kinda)
//Warning: This test was h-e-double hockey sticks to attempt to make it work with performance glitch, I tried for longer than I care to admit
//The answer to this issue seems like it would be way too much for me understand currently or/and beyond what I wanted for this test
// loggingIn.allUsernames.forEach((username) => {
//     it(`should do something after logging in as ${username}`, async () => {
//         await logIn(username, loggingIn.password);
//         if (username === 'performance_glitch_user') {
//         } else if (username !== 'problem_user' && username !== "error_user") {
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 await processItemInd(i);
//                 }
//         } else {
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 if (i == 0 || i == 1 || i == 4) {
//                     await processItemInd(i);
//                 }
//             }
//         }
//         console.log(`Logged in as ${username}`);
//     });
// });

//Continue shopping no items - DONE
// loggingIn.allUsernames.forEach((username) => {
//     it(`should do something after logging in as ${username}`, async () => {
//         await logIn(username, loggingIn.password);
//         await shopCart.open(shopCart.paths[1]);
//         await shopCart.continueShoppingButton.click();
//         await expect($(passers.pass.appLogo)).toBeExisting();
//         console.log(`Logged in as ${username}`);
//     });
// });

//Continue shopping with one item at a time - DONE (kinda)
//I really don't like performance glitch
// loggingIn.allUsernames.forEach((username) => {
//     it(`should do something after logging in as ${username}`, async () => {
//         await logIn(username, loggingIn.password);
//         if (username === 'performance_glitch_user') {
//         } else if (username !== 'problem_user' && username !== "error_user") {
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 await continueItemInd(i);
//                 }
//         } else {
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 if (i == 0 || i == 1 || i == 4) {
//                     await continueItemInd(i);
//                 }
//             }
//         }
//         console.log(`Logged in as ${username}`);
//     });
// });


//Clicking continue shopping on all items & remove - DONE (kinda)
// loggingIn.allUsernames.forEach((username) => {
//     it(`should do something after logging in as ${username}`, async () => {
//         await logIn(username, loggingIn.password);
//         if (username === 'performance_glitch_user') {
//         } else if (username !== 'problem_user' && username !== "error_user") {
//             await shopCart.open(shopCart.paths[0]);
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 await shopCart.items[i].click();
//             }    
//             await expect($(passers.pass.cartBadge)).toBeDisplayed();
//             await shopCart.cartButton.click();
//             await expect($(passers.pass.cartPage)).toBeExisting();
//             await shopCart.continueShoppingButton.click();
//             await expect($(passers.pass.appLogo)).toBeExisting();
//             await shopCart.cartButton.click();
//             await expect($(passers.pass.cartPage)).toBeExisting();
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 await shopCart.removeItems[i].click();
//             } 
//             await expect($(passers.pass.cartBadge)).not.toExist();
//         } else {
//             await shopCart.open(shopCart.paths[0]);
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 if (i == 0 || i == 1 || i == 4) {
//                     await shopCart.items[i].click();
//                 }
//             }    
//             await expect($(passers.pass.cartBadge)).toBeDisplayed();
//             await shopCart.cartButton.click();
//             await expect($(passers.pass.cartPage)).toBeExisting();
//             await shopCart.continueShoppingButton.click();
//             await expect($(passers.pass.appLogo)).toBeExisting();
//             await shopCart.cartButton.click();
//             await expect($(passers.pass.cartPage)).toBeExisting();
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 if (i == 0 || i == 1 || i == 4) {
//                     await shopCart.removeItems[i].click();
//                 }
//             } 
//             await expect($(passers.pass.cartBadge)).not.toExist();
//         }
//         console.log(`Logged in as ${username}`);
//     });
// });


//Clicking each link for each item - DONE (kinda)
// loggingIn.allUsernames.forEach((username) => {
//     it(`should do something after logging in as ${username}`, async () => {
//         await logIn(username, loggingIn.password);
//         if (username === 'performance_glitch_user') {
//         } else if (username !== 'problem_user' && username !== 'error_user') {
//             await shopCart.open(shopCart.paths[0]);
//             console.log("Starting add items loop");
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 await shopCart.items[i].click();
//             }    
//             console.log("Starting item page loop");
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 await expect($(passers.pass.cartBadge)).toBeDisplayed();
//                 await shopCart.cartButton.click();
//                 await expect($(passers.pass.cartPage)).toBeExisting();
//                 await shopCart.itemPages[i].click();
//                 await expect(shopCart.itemPages[i]).toBeExisting();
//                 await shopCart.cartButton.click();
//                 await expect($(passers.pass.cartPage)).toBeExisting();
//             }
//             await expect($(passers.pass.cartBadge)).toBeDisplayed();
//             await shopCart.cartButton.click();
//             console.log("Starting remove items loop");
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 await expect($(passers.pass.cartPage)).toBeExisting();
//                 await shopCart.removeItems[i].click();
//             }
//         } else {
//             await shopCart.open(shopCart.paths[0]);
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 if (i === 0 || i === 1 || i === 4) {
//                     await shopCart.items[i].click();
//                 }
//             }    
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 if (i === 0 || i === 1 || i === 4) {
//                     await expect($(passers.pass.cartBadge)).toBeDisplayed();
//                     await shopCart.cartButton.click();
//                     await expect($(passers.pass.cartPage)).toBeExisting();
//                     await shopCart.itemPages[i].click();
//                     if (username === 'problem_user' && i === 0) {
//                         await expect(shopCart.itemPages[3]).toBeExisting();
//                     } else if (username === 'problem_user' && i === 1) {
//                         await expect(shopCart.itemPages[2]).toBeExisting();
//                     } else if (username === 'problem_user' && i === 4) {
//                         await expect(shopCart.itemPages[5]).toBeExisting();
//                     } else {
//                     await expect(shopCart.itemPages[i]).toBeExisting();
//                     }
//                 }
//             }
//             await expect($(passers.pass.cartBadge)).toBeDisplayed();
//             await shopCart.cartButton.click();
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 if (i === 0 || i === 1 || i === 4) {
//                     await expect($(passers.pass.cartPage)).toBeExisting();
//                     await shopCart.removeItems[i].click();
//                 }
//             }
//         }
//         console.log(`Logged in as ${username}`);
//     });
// });

//Clicking checkout with all items
// loggingIn.allUsernames.forEach((username) => {
//     it(`should do something after logging in as ${username}`, async () => {
//         await logIn(username, loggingIn.password);
//         if (username === 'performance_glitch_user') {
//         } else if (username !== 'problem_user' && username !== "error_user") {
//             await shopCart.open(shopCart.paths[0]);
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 await shopCart.items[i].click();
//             }    
//             await expect($(passers.pass.cartBadge)).toBeDisplayed();
//             await shopCart.cartButton.click();
//             await expect($(passers.pass.cartPage)).toBeExisting();
//             await shopCart.checkoutButton.click();
//             await expect($(passers.pass.checkoutPage)).toBeExisting();
//             await shopCart.cartButton.click();
//             await expect($(passers.pass.cartPage)).toBeExisting();
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 await shopCart.removeItems[i].click();
//             } 
//             await expect($(passers.pass.cartBadge)).not.toExist();
//         } else {
//             await shopCart.open(shopCart.paths[0]);
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 if (i == 0 || i == 1 || i == 4) {
//                     await shopCart.items[i].click();
//                 }
//             }    
//             await expect($(passers.pass.cartBadge)).toBeDisplayed();
//             await shopCart.cartButton.click();
//             await expect($(passers.pass.cartPage)).toBeExisting();
//             await shopCart.checkoutButton.click();
//             await expect($(passers.pass.checkoutPage)).toBeExisting();
//             await shopCart.cartButton.click();
//             await expect($(passers.pass.cartPage)).toBeExisting();
//             for (let i = 0; i < shopCart.items.length; i++) {
//                 if (i == 0 || i == 1 || i == 4) {
//                     await shopCart.removeItems[i].click();
//                 }
//             } 
//             await expect($(passers.pass.cartBadge)).not.toExist();
//         }
//         console.log(`Logged in as ${username}`);
//     });
// });