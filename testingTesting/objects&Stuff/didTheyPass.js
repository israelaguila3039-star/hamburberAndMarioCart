import { $ } from '@wdio/globals';


class passers {

    get pass() {
        return {
            appLogo: '[class="app_logo"]',
            hamburberOpen: '[style="position: fixed; right: inherit; z-index: 1100; width: 300px; height: 100%; transition: 0.5s;"]',
            about: '#__next',
            loginLogo: '[class="login_logo"]'
        }
    }

}

export default new passers();