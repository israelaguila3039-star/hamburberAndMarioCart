import { browser } from '@wdio/globals'

//This is just the endpoint we're using
export default class endLogin {
    open () {
        return browser.url(`https://www.saucedemo.com/`);
    }
}