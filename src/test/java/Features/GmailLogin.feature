Feature: Gmail Login application testing

Scenario: Gmail Login Test

Given user opens Google page
Then user enters email and press next button
Then user enters password and press next button again
And close the browser

Scenario: Gmail login title page

Given user opens Google page
Then get the title of gmail login page and verify
And close the browser
