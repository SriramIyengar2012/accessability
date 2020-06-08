var chrome = require('../../node_modules/selenium-webdriver/chrome')
const   seleniumWebdriver  = require('../../node_modules/selenium-webdriver');
const { setWorldConstructor } = require('../../node_modules/cucumber')
var {setDefaultTimeout} = require('cucumber');



function CustomWorld(){
    this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();
    }
    setDefaultTimeout(60 * 1000);
    
    setWorldConstructor(CustomWorld)
 
    module.exports = function() {
     
      this.World = CustomWorld;
     
      
    }



