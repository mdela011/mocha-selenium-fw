const {Builder, By, until} = require('selenium-webdriver');
var assert = require('assert');


const {driver} = require('./config/setup')

describe('Array', function() {
  describe('#indexOf()', function() {
    this.slow(10000)
    it('should return -1 when the value is not present @smoke', async () => {
        console.log("driver 2")
        //console.log(driver);
        driver.sleep(5000);
        // driver.findElement(By.name('q')).sendKeys('nehalist');
        var elem = await driver.findElement(By.css('#hello'));
        console.log(elem.getText())

        elem.getText().then(function(result) {
          console.log(result) // "Some User token"
          assert.equal(result,'Hello World'); 

       })
        // driver.wait(until.elementLocated(By.id('search')));
        // driver.findElement(By.linkText('nehalist.io')).click();
        // driver.wait(until.titleIs('nehalist.io'));
        
        //return assert.equal(elem.getText(),'Hello World'); 
        //assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('should return -1 when the value is not present @smoke', function() {
            console.log("driver 3")
            //console.log(driver);
            driver.sleep(5000);
            // driver.findElement(By.name('q')).sendKeys('nehalist');
            
            var elems = driver.findElements(By.css('#menu > li.ant-menu-item'));
            //console.log(elems.getText())

            elems.then(function(result)
            {
              console.log(result.length) // "Some User token"
              assert.equal(result.length,5); 

          })
      });
  });
});