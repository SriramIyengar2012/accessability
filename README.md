## An Example repo with accessbility testing using axe-webdriver js

This contains examples for both jasmine and cucumber js

## pre-requiste for this repo
Start the Selenium Grid that runs in localhost at port 4444

## jasmine spec execution
command to execute the test using jasmin specs
./node_modules/.bin/jasmine
csv file with axe voliations will get created in the same folder

## cucumber js execution
command to execute the test using jasmin specs
./node_modules/.bin/cucumber-js features/ -f json:./report/cucumber_report.json || node ./report/reporter.js
Html report will get created in report folder
csv file with axe voliations will get created in the same folder




