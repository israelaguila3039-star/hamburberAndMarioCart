import { $ } from '@wdio/globals';


class passers {

    get pass() {
        return {
            cartPage: '//span[text()="Your Cart"]',
            appLogo: '[class="app_logo"]',
            hamburberOpen: '[aria-hidden="false"]',
            about: '//h1[@class="MuiTypography-root MuiTypography-h1 css-hqwp3n"]',
            loginLogo: '[class="login_logo"]',
            hamburgerClosed: '//*[@id="menu_button_container"]/div/div[2]',
            checkoutPage: '//span[text()="Checkout: Your Information"]',
            cartBadge: '[class=shopping_cart_badge]',
            errorFourOFour: '//h3[text()="404 - Page Not Found"]'
        }
    }

}

export default new passers();