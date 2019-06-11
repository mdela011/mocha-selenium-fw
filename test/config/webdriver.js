//require webdriver lib
var webDriver = require('selenium-webdriver');

//Init driver fn
function createDriver(){
    //declare environment veriables (ie stage/prod) & browser
    var env = process.env.key;
    var browser = process.env.browser;

    //initialize browser
    return driver = new webDriver.Builder().forBrowser(browser).build();
};

//export driver to use through out program
exports.driver = createDriver()