const {Builder, By, until} = require('selenium-webdriver');
var assert = require('assert');


var setup = require('./config/setup')

describe('Array', function() {
  describe('#indexOf()', function() {
    this.slow(10000)
    it('should return -1 when the value is not present @smoke', function() {
        console.log("driver 2")
        //console.log(setup.driver);
        // driver.findElement(By.name('q')).sendKeys('nehalist');
        // driver.findElement(By.id('tsf')).submit();
        // driver.wait(until.elementLocated(By.id('search')));
        // driver.findElement(By.linkText('nehalist.io')).click();
        // driver.wait(until.titleIs('nehalist.io'));
        
        assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('should return -1 when the value is not present', function() {
        assert.equal([1, 2, 3].indexOf(2), -1);
      });
  });
});