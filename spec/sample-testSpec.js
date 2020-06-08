var AxeBuilder = require('../node_modules/axe-webdriverjs'),
selenium = require('../node_modules/selenium-webdriver'),
AxeReports = require('../node_modules/axe-reports'),
Key = selenium.Key;


var driver;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  
    describe('Test', function() {
    
        beforeEach(function(done) {
            driver = new selenium.Builder()
                .forBrowser('chrome')
                .usingServer('http://localhost:4444/wd/hub')
                .build();

                driver.get('https://www.sitespeed.io/')
                .then(function () {
                    done();
                });
        });

        afterEach(function(done) {
            driver.quit().then(function () {
                done();
            });
        });

     

            it('should fetch the radio button demo and analyze it', function (done) {
                driver.findElement(selenium.By.linkText('Search')).click()
                    .then(function () {
                        AxeBuilder(driver)
                            .withTags(['wcag2a', 'wcag2aa'])
                            .analyze(function(err,results) {
                                if (err != null) {
                                    console.log(err);
                                  }
                                  console.log(results)
                                  AxeReports.processResults(results, 'csv', 'test-results');
                                  done();
                            })
                    });
                 
                });

              
        });
    


  