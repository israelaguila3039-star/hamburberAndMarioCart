import { $ } from '@wdio/globals';
import endLogin from './theEndWithAPoint.js';



class hamburberNoCheese extends endLogin {

    get menuButton() {
        return $('#react-burger-menu-btn');
    }
//$('#about_sidebar_link')
    get hamburberButtons() {
        return [$('#inventory_sidebar_link'), $('#reset_sidebar_link'), $('#logout_sidebar_link'), $('#react-burger-cross-btn')]
    }
}

export default new hamburberNoCheese();