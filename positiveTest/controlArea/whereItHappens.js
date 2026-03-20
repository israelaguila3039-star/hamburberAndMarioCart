import { expect } from '@wdio/globals'
import thePlaceILogIn from '../stuff/loggingIn.js'
import weAreHere from '../stuff/weGotHere.js'

async function theTestIng(username, password) {    
    
    describe('My Login application', () => {
        it('should login with valid credentials', async () => {
            await thePlaceILogIn.open()

            await thePlaceILogIn.login(username, password)
            await expect(weAreHere.flashAlert).toBeExisting()
            await expect(weAreHere.flashAlert).toHaveText(
                expect.stringContaining('Swag Labs'))
        })
    })

}
theTestIng("standard_user", "secret_sauce")


// theTestIng("problem_user", "secret_sauce");

// theTestIng("error_user", "secret_sauce");
// theTestIng("visual_user", "secret_sauce");