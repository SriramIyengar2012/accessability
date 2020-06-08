'use strict';
var {After, AfterAll} = require('../../node_modules/cucumber');

var path = require('path');
global.appRoot = path.resolve(__dirname);

After(function () {
    // Assuming this.driver is a selenium webdriver
    return this.driver.quit();
  });





