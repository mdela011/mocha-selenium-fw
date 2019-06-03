// Tests/DefaultTest.js

//const {Builder, By, until} = require('selenium-webdriver');
var webDriver = require('selenium-webdriver')
//const chrome = require('selenium-webdriver/chrome')
//const firefox = require('selenium-webdriver/firefox')

//var seleniumDrivers = require('selenium-drivers')

//let driver;
var {driver} = require('./webdriver')

//before all test files
before(function(){ 
    //try to get url, catch error if driver not initialized
    try{
            driver.get('http://localhost:8080');
            driver.sleep(5000);
           // return driver; //+ this doesnt execute 'END of BEFORE' below
    }
    catch{
        console.log("driver init failed")
    }
    //console.log("END OF BEFORE")
    //return driver;
    //console.log(driver) //WORKS w/above comment
})

//after all test files
after(function(){
    driver.quit();
})

exports.driver = driver;