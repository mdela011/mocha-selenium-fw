// Tests/DefaultTest.js

//const {Builder, By, until} = require('selenium-webdriver');
var webDriver = require('selenium-webdriver');
//const chrome = require('selenium-webdriver/chrome')
//const firefox = require('selenium-webdriver/firefox')

//var seleniumDrivers = require('selenium-drivers')

//let driver;


function createDriver(){
    //declare environment veriables (ie stage/prod) & browser
    var env = process.env.key;
    var browser = process.env.browser;

    //initialize browser
    return driver = new webDriver.Builder().forBrowser(browser).build();
};

exports.driver = createDriver()