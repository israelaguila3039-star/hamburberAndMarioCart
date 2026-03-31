import { $ } from '@wdio/globals';


class passers {

    get pass() {
        return {
            cartPage: '//span[text()="Your Cart"]',
            appLogo: '[class="app_logo"]',
            hamburberOpen: '[style="position: fixed; right: inherit; z-index: 1100; width: 300px; height: 100%; transition: 0.5s;"]',
            about: 'h1',
            loginLogo: '[class="login_logo"]',
            hamburgerClosed: '[style="position: fixed; right: inherit; z-index: 1100; width: 300px; height: 100%; transition: 0.5s; transform: translate3d(-100%, 0px, 0px);"]',
            checkoutPage: '//span[text()="Checkout: Your Information"]'
        }
    }

}

export default new passers();