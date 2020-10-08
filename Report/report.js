$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/GmailLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Login application testing",
  "description": "",
  "id": "gmail-login-application-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Gmail Login Test",
  "description": "",
  "id": "gmail-login-application-testing;gmail-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens Google page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters email and press next button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters password and press next button again",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_opens_Google_page()"
});
formatter.result({
  "duration": 3920168400,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 126 milliseconds\nBuild info: version: \u00273.0.0-beta2\u0027, revision: \u00272aa21c1\u0027, time: \u00272016-08-02 15:03:28 -0700\u0027\nSystem info: host: \u0027AmirPC\u0027, ip: \u0027192.168.8.115\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:60551}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a), userDataDir\u003dC:\\Users\\Admin\\AppData\\Local\\Temp\\scoped_dir9828_31856}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d73.0.3683.86, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 6a685ce9188ad7d5add2854243678860\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:683)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:331)\r\n\tat StepDefinition.LoginStepDef.user_opens_Google_page(LoginStepDef.java:21)\r\n\tat ✽.Given user opens Google page(src/test/java/Features/GmailLogin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_email_and_press_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_enters_password_and_press_next_button_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Gmail login title page",
  "description": "",
  "id": "gmail-login-application-testing;gmail-login-title-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user opens Google page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "get the title of gmail login page and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_opens_Google_page()"
});
formatter.result({
  "duration": 9561765200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.get_the_title_of_gmail_login_page_and_verify()"
});
formatter.result({
  "duration": 11606600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.close_the_browser()"
});
formatter.result({
  "duration": 923474600,
  "status": "passed"
});
});