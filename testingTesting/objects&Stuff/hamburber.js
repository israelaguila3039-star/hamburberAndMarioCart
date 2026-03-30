import { $ } from '@wdio/globals';
import endLogin from './theEndWithAPoint.js';



class hamburberNoCheese extends endLogin {

    get menuButton() {
        return $('#react-burger-menu-btn');
    }

    get hamburberButtons() {
        return [$('#inventory_sidebar_link'), $('#about_sidebar_link'), $('#reset_sidebar_link'), $('#logout_sidebar_link')]
    }
}

export default new hamburberNoCheese();