import { $ } from '@wdio/globals';
import endLogin from './theEndWithAPoint.js';


class shopCart extends endLogin {

    get cartButton() {
        return $('#shopping_cart_container');
    }

    get checkoutButton() {
        return $('#checkout');
    }

    get continueShoppingButton() {
        return $('#continue-shopping')
    }

    get removeItems(){
        return [$('#remove-sauce-labs-backpack'), $('#remove-sauce-labs-bike-light'), $('#remove-sauce-labs-bolt-t-shirt'),
             $('#remove-sauce-labs-fleece-jacket'), $('#remove-sauce-labs-onesie'), $('//button[@id="remove-test.allthethings()-t-shirt-(red)"]')];
    }

    get items() {
        return [$('//button[@id="add-to-cart-sauce-labs-backpack"]'), $('//button[@id="add-to-cart-sauce-labs-bike-light"]'), $('//button[@id="add-to-cart-sauce-labs-bolt-t-shirt"]'),
             $('//button[@id="add-to-cart-sauce-labs-fleece-jacket"]'), $('//button[@id="add-to-cart-sauce-labs-onesie"]'), $('//button[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]')];
    }

    get itemPages() {
        return [$('//div[text()="Sauce Labs Backpack"]'), $('//div[text()="Sauce Labs Bike Light"]'), $('//div[text()="Sauce Labs Bolt T-Shirt"]'), 
            $('//div[text()="Sauce Labs Fleece Jacket"]'), $('//div[text()="Sauce Labs Onesie"]'), $('//div[text()="Test.allTheThings() T-Shirt (Red)"]')]
    }

}

export default new shopCart();