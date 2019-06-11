let navLocators = require ('./locators/navbar');
let homeLocators = require ('./locators/home')

const {Builder, By, until} = require('selenium-webdriver');
var assert = require('assert');


const {driver} = require('./config/setup')

describe('Array', function() {
  describe('#indexOf()', function() {
    
    it('TC 00 - Verify tCI working - @gamestop', async () => {
      //console.log(driver);
      console.log("GUI WORKING")
      assert.equal(true,true)
      // var elem = await driver.findElement(By.css(homeLocators.helloText)); 

      // //return checked tc
      // return elem.getText().then(function(result) {
      //   console.log(result) // "Some User token"
      //   assert.equal(result,'Home Page'); 

     //})
  });


    it('TC 01 - Verify Home page text - @smoke', async () => {
        //console.log(driver);
        var elem = await driver.findElement(By.css(homeLocators.helloText)); 

        //return checked tc
        return elem.getText().then(function(result) {
          console.log(result) // "Some User token"
          assert.equal(result,'Home Page'); 

       })
    });

    it('TC 02 - Verify 5 options on Nav bar - @smoke', function() {
            var elems = driver.findElements(By.css(navLocators.navBarMenuItems));
            //console.log(elems.getText())

            elems.then(function(result)
            {
              console.log(result.length) // "Some User token"
              assert.equal(result.length,5); 

          })
      });

      it('TC 03 - Verify Listings navigation links & url - @smoke', async () => {
        await driver.findElement(By.css(navLocators.listingNavLink)).click();
        
        return driver.getCurrentUrl().then(function(result){
          assert.equal(result,'http://localhost:8080/listings')
        })
  });

  it('TC 04 - Verify About navigation links & url - @smoke', async () => {
    await driver.findElement(By.css(navLocators.aboutNavLink)).click();
    
    return driver.getCurrentUrl().then(function(result){
      assert.equal(result,'http://localhost:8080/about')
    })
});

it('TC 05 - Verify Reviews navigation links & url - @smoke', async () => {
  await driver.findElement(By.css(navLocators.reviewsNavLink)).click();
  
  return driver.getCurrentUrl().then(function(result){
    assert.equal(result,'http://localhost:8080/reviews')
  })
});

it('TC 06 - Verify Contact navigation links & url - @smoke', async () => {
  await driver.findElement(By.css(navLocators.contactNavLink)).click();
  
  return driver.getCurrentUrl().then(function(result){
    assert.equal(result,'http://localhost:8080/contactus')
  })
});

it('TC 07 - Verify Home navigation links & url - @smoke', async () => {
  await driver.findElement(By.css(navLocators.homeNavLink)).click();
  
  return driver.getCurrentUrl().then(function(result){
    assert.equal(result,'http://localhost:8080/')
  })
});


  });
});