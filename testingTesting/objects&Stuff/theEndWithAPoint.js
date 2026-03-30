import { browser } from '@wdio/globals'

//This is just the endpoint we're using
export default class endLogin {
    open (path = '') {
        return browser.url(`https://www.saucedemo.com/${path}`);
    }


    get paths() {
        return ['inventory.html', 'cart.html', 'checkout-step-one.html', 'inventory-item.html?id=0',
            'inventory-item.html?id=1', 'inventory-item.html?id=2', 'inventory-item.html?id=3',
            'inventory-item.html?id=4', 'inventory-item.html?id=5']
    }
}