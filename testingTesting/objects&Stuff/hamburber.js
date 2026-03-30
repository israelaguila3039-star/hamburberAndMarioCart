import { $ } from '@wdio/globals';
import endLogin from './theEndWithAPoint.js';



class hamburberNoCheese extends endLogin {

    get menuButton() {
        return $('#react-burger-menu-btn');
    }

    get hamburberButtons() {}

}

export default new hamburberNoCheese();