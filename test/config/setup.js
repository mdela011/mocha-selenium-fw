//require Init driver
var {driver} = require('./webdriver')

//before all test files
before(function(){ 
    //try to get url, catch error if driver not initialized
    try{
        
            //comment afterwards
            driver.get('https://www.gamestop.com/');
            
            //local site
            //driver.get('http://localhost:8080');
           // return driver; //+ this doesnt execute 'END of BEFORE' below
    }
    catch{
        console.log("driver init failed")
    }
})

//after all test files
after(function(){
    driver.quit();
})

exports.driver = driver;