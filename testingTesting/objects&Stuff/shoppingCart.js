import { $ } from '@wdio/globals';
import endLogin from './theEndWithAPoint.js';


class shopCart extends endLogin {

    get cartButton() {
        return $('#shopping_cart_container');
    }

    get checkoutButton() {
        return $('#checkout');
    }

    get removeItems(){
        return [$('#remove-sauce-labs-backpack'), $('#remove-sauce-labs-bike-light'), $('#remove-sauce-labs-bolt-t-shirt'),
             $('#remove-sauce-labs-fleece-jacket'), $('#remove-sauce-labs-onesie'), $('#remove-test.allthethings()-t-shirt-(red)')];
    }

    get items() {
        return [$('#add-to-cart-sauce-labs-backpack'), $('#add-to-cart-sauce-labs-bike-light'), $('#add-to-cart-sauce-labs-bolt-t-shirt'),
             $('#add-to-cart-sauce-labs-fleece-jacket'), $('#add-to-cart-sauce-labs-onesie'), $('#add-to-cart-test.allthethings()-t-shirt-(red)')];
    }
}

export default new shopCart();