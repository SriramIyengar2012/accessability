'use strict';
const webdriver = require('../../node_modules/selenium-webdriver');
const { Given, When, Then } = require('../../node_modules/cucumber');
var AxeReports = require('../../node_modules/axe-reports');
var AxeBuilder = require('../../node_modules/axe-webdriverjs');
const assert = require('../../node_modules/assert')


Given('app url', function () {
    // Write code here that turns the phrase above into concrete actions
    return this.driver.get('https://www.sitespeed.io/')
  });
  When('user search', function () {
      return this.driver.findElement({linkText:'Search'}).click();
     
  });
  Then('check axe', function() {
      return AxeBuilder(this.driver)
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze(function(err, results) {
        if (err != null) {
          console.log(err);
        }
        console.log(results.violations.length)
        AxeReports.processResults(results, 'csv', 'test-results');
        var count = results.violations.length;
        console.log(count);
        return count;
           
      })
      .then(function () {
        assert.fail('Fail there is an acessbility violation');

      });
  

  });



           
           

