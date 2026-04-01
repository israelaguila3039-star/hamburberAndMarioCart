import { $ } from '@wdio/globals';


class passers {

    get pass() {
        return {
            cartPage: '//span[text()="Your Cart"]',
            appLogo: '[class="app_logo"]',
            hamburberOpen: '[style="position: fixed; right: inherit; z-index: 1100; width: 300px; height: 100%; transition: 0.5s;"]',
            about: 'h1',
            loginLogo: '[class="login_logo"]',
            hamburgerClosed: '//*[@id="menu_button_container"]/div/div[2]',
            checkoutPage: '//span[text()="Checkout: Your Information"]',
            cartBadge: '[class=shopping_cart_badge]'
        }
    }

}

export default new passers();