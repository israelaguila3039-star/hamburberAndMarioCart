import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import thePlaceILogIn from '../stuff/loggingIn.js'
//inporting the class 


async function theTestIng(username, password, passSelector) {    
//This function can control what is inputted for the password, username, and the selector to determine if the test has passed.
//This is due to neeeding to run multiple tests where

    describe('My Login application', () => {
        it('should login with valid credentials', async () => {
            await thePlaceILogIn.open()

            await thePlaceILogIn.login(username, password)
            await expect($(passSelector)).toBeExisting()
            await expect($(passSelector)).toHaveText(
                expect.stringContaining('Swag Labs'))
        })
    })

}
//positive tests
theTestIng("standard_user", "secret_sauce", '[class="app_logo"]');
theTestIng();
theTestIng("problem_user", "secret_sauce", '[class="app_logo"]');
theTestIng();
theTestIng("error_user", "secret_sauce", '[class="app_logo"]');
theTestIng("visual_user", "secret_sauce", '[class="app_logo"]');

//Negative tests
