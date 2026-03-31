import { $ } from '@wdio/globals';
import endLogin from './theEndWithAPoint.js';


class shopCart extends endLogin {

    get cartButton() {
        return $('#shopping_cart_container');
    }

    get checkoutButton() {
        return $('button[class="btn btn_secondary back btn_medium"]');
    }

}

export default new shopCart();