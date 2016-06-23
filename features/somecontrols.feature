Feature: Some Controls Test
  As a Webdriver.js learner
  I want to play with some basic web controls in http://the-internet.herokuapp.com  
  In order to find out how to use page object pattern in cucumber

Background:
  Given user has access to the home site
  
Scenario: Check Google Controls
  When user has accessed the google page
  Then user should see a search textbox
  
Scenario: Check Checkbox Controls
  When user has accessed the checkbox page
  Then checkbox two should be enabled
  And checkbox one should be enabled after clicking on it  
  
Scenario: Check Login Controls
  When user has accessed the login page
  Then login form should deny access with wrong creds
  And login form should allow access with correct creds
    
Scenario: Check Dynamic Loading Controls 
  When user has accessed the dynamic loading page
  Then user click the start button
  Then user should see hello world text  
  
