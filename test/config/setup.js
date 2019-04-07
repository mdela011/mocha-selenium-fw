// Tests/DefaultTest.js

//const {Builder, By, until} = require('selenium-webdriver');
var webDriver = require('selenium-webdriver')
//const chrome = require('selenium-webdriver/chrome')
//const firefox = require('selenium-webdriver/firefox')

var seleniumDrivers = require('selenium-drivers')

var driver;


before(function(){
    //declare environment veriables, stage/prod & browser
    //var driver;
    var env = process.env.key;
    var browser = process.env.browser;

    //initialize browser
    try{
        seleniumDrivers.init({
            browserName:browser,
            download: false,
        }).then(function(){
            driver = new webDriver.Builder().forBrowser(browser).build();
            driver.sleep(5000);
            driver.get('https://www.google.com/');
            //return driver;
        }).catch(function (error) {
            console.error(error)
        });
    }
    catch{
        console.log("driver init failed")
    }
    console.log("END OF BEFORE")
    //console.log(driver)
})

after(function(){
    driver.quit();
})

//exports.driver = driver;

// (async function example() {
//     const driver = await new Builder().forBrowser('chrome').build();

//     try {
//         await driver.get('https://www.google.com');
//         await driver.findElement(By.name('q')).sendKeys('nehalist');
//         await driver.findElement(By.id('tsf')).submit();
//         await driver.wait(until.elementLocated(By.id('search')));
//         await driver.findElement(By.linkText('nehalist.io')).click();
//         await driver.wait(until.titleIs('nehalist.io'));
//     } finally {
//         await driver.quit();
//     }
// })();