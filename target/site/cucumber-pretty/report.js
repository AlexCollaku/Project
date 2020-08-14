$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ScholasticBookClubs/YTOjumper.feature");
formatter.feature({
  "line": 2,
  "name": "YTO jumper",
  "description": "",
  "id": "yto-jumper",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@project"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify YTO jumper shows up only once per session",
  "description": "",
  "id": "yto-jumper;verify-yto-jumper-shows-up-only-once-per-session",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Login with \u003cuserEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I go to YTO page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I go to By Flyer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Price-Qty box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify jumper with text is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Price-Qty box",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify jumper is NOT displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "yto-jumper;verify-yto-jumper-shows-up-only-once-per-session;",
  "rows": [
    {
      "cells": [
        "userEmail",
        "password"
      ],
      "line": 15,
      "id": "yto-jumper;verify-yto-jumper-shows-up-only-once-per-session;;1"
    },
    {
      "cells": [
        "al@project.com",
        "alexbisha10"
      ],
      "line": 16,
      "id": "yto-jumper;verify-yto-jumper-shows-up-only-once-per-session;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify YTO jumper shows up only once per session",
  "description": "",
  "id": "yto-jumper;verify-yto-jumper-shows-up-only-once-per-session;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@project"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Login with al@project.com and alexbisha10",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I go to YTO page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I go to By Flyer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Price-Qty box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify jumper with text is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Price-Qty box",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify jumper is NOT displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "YTOjumper.launchScholasticBookClubs()"
});
formatter.result({
  "duration": 10656568114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "al@project.com",
      "offset": 13
    },
    {
      "val": "alexbisha10",
      "offset": 32
    }
  ],
  "location": "YTOjumper.login(String,String)"
});
formatter.result({
  "duration": 11819583405,
  "status": "passed"
});
formatter.match({
  "location": "YTOjumper.clickYTO()"
});
formatter.result({
  "duration": 7729084737,
  "status": "passed"
});
formatter.match({
  "location": "YTOjumper.clickByFlyer()"
});
formatter.result({
  "duration": 2220161068,
  "status": "passed"
});
formatter.match({
  "location": "YTOjumper.clickPriceQty()"
});
formatter.result({
  "duration": 2230360830,
  "status": "passed"
});
formatter.match({
  "location": "YTOjumper.jumperWithTextIsDisplayed()"
});
formatter.result({
  "duration": 6379955764,
  "status": "passed"
});
formatter.match({
  "location": "YTOjumper.clickPriceQty()"
});
formatter.result({
  "duration": 2194179494,
  "status": "passed"
});
formatter.match({
  "location": "YTOjumper.jumperIsNotDisplayed()"
});
formatter.result({
  "duration": 2080938236,
  "status": "passed"
});
formatter.after({
  "duration": 5944977053,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify YTO jumper is not displayed for BonusPoint-Qty",
  "description": "",
  "id": "yto-jumper;verify-yto-jumper-is-not-displayed-for-bonuspoint-qty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I Login with \u003cuserEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I go to YTO page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I go to By Flyer tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on BonusPoint-Qty box",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify jumper is NOT displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on Price-Qty box",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify jumper with text is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "yto-jumper;verify-yto-jumper-is-not-displayed-for-bonuspoint-qty;",
  "rows": [
    {
      "cells": [
        "userEmail",
        "password"
      ],
      "line": 31,
      "id": "yto-jumper;verify-yto-jumper-is-not-displayed-for-bonuspoint-qty;;1"
    },
    {
      "cells": [
        "al@project.com",
        "alexbisha10"
      ],
      "line": 32,
      "id": "yto-jumper;verify-yto-jumper-is-not-displayed-for-bonuspoint-qty;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Verify YTO jumper is not displayed for BonusPoint-Qty",
  "description": "",
  "id": "yto-jumper;verify-yto-jumper-is-not-displayed-for-bonuspoint-qty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@project"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I Login with al@project.com and alexbisha10",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I go to YTO page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I go to By Flyer tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on BonusPoint-Qty box",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify jumper is NOT displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on Price-Qty box",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify jumper with text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "YTOjumper.launchScholasticBookClubs()"
});
formatter.result({
  "duration": 8144737315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "al@project.com",
      "offset": 13
    },
    {
      "val": "alexbisha10",
      "offset": 32
    }
  ],
  "location": "YTOjumper.login(String,String)"
});
formatter.result({
  "duration": 12130007082,
  "status": "passed"
});
formatter.match({
  "location": "YTOjumper.clickYTO()"
});
formatter.result({
  "duration": 4259665205,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d84.0.4147.125)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.125, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:52329}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8dfca397d10f7401d87cd60ddab084e2\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat Pages.BasePage.clickThis(BasePage.java:40)\r\n\tat Pages.ScholasticBookClubs.LandingPage.clickOnYourTeacherOrder(LandingPage.java:146)\r\n\tat StepDefinition.ScholasticBookClubs.YTOjumper.clickYTO(YTOjumper.java:34)\r\n\tat ✽.And I go to YTO page(ScholasticBookClubs/YTOjumper.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "YTOjumper.clickByFlyer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YTOjumper.clickBonusQty()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YTOjumper.jumperIsNotDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YTOjumper.clickPriceQty()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YTOjumper.jumperWithTextIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 6484904558,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Verify user is successfully able to update name in My Accounts",
  "description": "",
  "id": "yto-jumper;verify-user-is-successfully-able-to-update-name-in-my-accounts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I Login with \u003cuserEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I go to My Accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I update the lastName",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify name is updated successfully in My Accounts",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I verify name is updated successfully in Page Header",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "yto-jumper;verify-user-is-successfully-able-to-update-name-in-my-accounts;",
  "rows": [
    {
      "cells": [
        "userEmail",
        "password"
      ],
      "line": 44,
      "id": "yto-jumper;verify-user-is-successfully-able-to-update-name-in-my-accounts;;1"
    },
    {
      "cells": [
        "al@project.com",
        "alexbisha10"
      ],
      "line": 45,
      "id": "yto-jumper;verify-user-is-successfully-able-to-update-name-in-my-accounts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Verify user is successfully able to update name in My Accounts",
  "description": "",
  "id": "yto-jumper;verify-user-is-successfully-able-to-update-name-in-my-accounts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@project"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I Login with al@project.com and alexbisha10",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I go to My Accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I update the lastName",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify name is updated successfully in My Accounts",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I verify name is updated successfully in Page Header",
  "keyword": "And "
});
formatter.match({
  "location": "YTOjumper.launchScholasticBookClubs()"
});
formatter.result({
  "duration": 6552618727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "al@project.com",
      "offset": 13
    },
    {
      "val": "alexbisha10",
      "offset": 32
    }
  ],
  "location": "YTOjumper.login(String,String)"
});
formatter.result({
  "duration": 11649033009,
  "status": "passed"
});
formatter.match({
  "location": "YTOjumper.goToMyAccountsPage()"
});
formatter.result({
  "duration": 3155008065,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan class\u003d\"hide-mobile user-account-name\"\u003e...\u003c/span\u003e is not clickable at point (703, 91). Other element would receive the click: \u003cdiv\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d84.0.4147.125)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.125, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:52412}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3d13b12dbf2a7db782db69b0f3710697\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat Pages.BasePage.clickThis(BasePage.java:40)\r\n\tat Pages.ScholasticBookClubs.LandingPage.clickToMyAccount(LandingPage.java:261)\r\n\tat StepDefinition.ScholasticBookClubs.YTOjumper.goToMyAccountsPage(YTOjumper.java:76)\r\n\tat ✽.And I go to My Accounts page(ScholasticBookClubs/YTOjumper.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "YTOjumper.updateName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YTOjumper.verifyMyAccountName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YTOjumper.verifyNameInPageHeader()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 6289085045,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Verify user is successfully able to add credit card in My Accounts",
  "description": "",
  "id": "yto-jumper;verify-user-is-successfully-able-to-add-credit-card-in-my-accounts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I Login with \u003cuserEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I go to My Accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I add credit card",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I verify credit card is added successfully in My Accounts",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I verify added card is displayed when shopping using credit card",
  "keyword": "And "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "yto-jumper;verify-user-is-successfully-able-to-add-credit-card-in-my-accounts;",
  "rows": [
    {
      "cells": [
        "userEmail",
        "password"
      ],
      "line": 57,
      "id": "yto-jumper;verify-user-is-successfully-able-to-add-credit-card-in-my-accounts;;1"
    },
    {
      "cells": [
        "al@project.com",
        "alexbisha10"
      ],
      "line": 58,
      "id": "yto-jumper;verify-user-is-successfully-able-to-add-credit-card-in-my-accounts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 58,
  "name": "Verify user is successfully able to add credit card in My Accounts",
  "description": "",
  "id": "yto-jumper;verify-user-is-successfully-able-to-add-credit-card-in-my-accounts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@project"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I Login with al@project.com and alexbisha10",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I go to My Accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I add credit card",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I verify credit card is added successfully in My Accounts",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I verify added card is displayed when shopping using credit card",
  "keyword": "And "
});
formatter.match({
  "location": "YTOjumper.launchScholasticBookClubs()"
});
formatter.result({
  "duration": 7344324809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "al@project.com",
      "offset": 13
    },
    {
      "val": "alexbisha10",
      "offset": 32
    }
  ],
  "location": "YTOjumper.login(String,String)"
});
formatter.result({
  "duration": 11493152975,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d84.0.4147.125)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.125, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:52496}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 71480db4084f78dd136fe54e630b794f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat Pages.BasePage.clickThis(BasePage.java:40)\r\n\tat Pages.ScholasticBookClubs.LandingPage.clickHeaderNotificationMsg(LandingPage.java:126)\r\n\tat StepDefinition.ScholasticBookClubs.YTOjumper.login(YTOjumper.java:26)\r\n\tat ✽.When I Login with al@project.com and alexbisha10(ScholasticBookClubs/YTOjumper.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "YTOjumper.goToMyAccountsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YTOjumper.addCreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YTOjumper.verifyCreditCardAdded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YTOjumper.verifyAddedCardDisplayedWhenShopping()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 6211986206,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 60,
  "name": "Verify user can successfully add items to My Recommended list",
  "description": "",
  "id": "yto-jumper;verify-user-can-successfully-add-items-to-my-recommended-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I Login with \u003cuserEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I search \u0027Harry\u0027 using search box",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I click on \u0027star\u0027 icon",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I verify item is added to recommended list",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "yto-jumper;verify-user-can-successfully-add-items-to-my-recommended-list;",
  "rows": [
    {
      "cells": [
        "userEmail",
        "password"
      ],
      "line": 68,
      "id": "yto-jumper;verify-user-can-successfully-add-items-to-my-recommended-list;;1"
    },
    {
      "cells": [
        "al@project.com",
        "alexbisha10"
      ],
      "line": 69,
      "id": "yto-jumper;verify-user-can-successfully-add-items-to-my-recommended-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 69,
  "name": "Verify user can successfully add items to My Recommended list",
  "description": "",
  "id": "yto-jumper;verify-user-can-successfully-add-items-to-my-recommended-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@project"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I Login with al@project.com and alexbisha10",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I search \u0027Harry\u0027 using search box",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I click on \u0027star\u0027 icon",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I verify item is added to recommended list",
  "keyword": "Then "
});
formatter.match({
  "location": "YTOjumper.launchScholasticBookClubs()"
});
formatter.result({
  "duration": 6619193222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "al@project.com",
      "offset": 13
    },
    {
      "val": "alexbisha10",
      "offset": 32
    }
  ],
  "location": "YTOjumper.login(String,String)"
});
formatter.result({
  "duration": 11719615394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027Harry\u0027 ",
      "offset": 9
    }
  ],
  "location": "YTOjumper.searchBook(String)"
});
formatter.result({
  "duration": 2944499373,
  "status": "passed"
});
formatter.match({
  "location": "YTOjumper.clickStar()"
});
formatter.result({
  "duration": 265073631,
  "status": "passed"
});
formatter.match({
  "location": "YTOjumper.verifyItemIsAdded()"
});
formatter.result({
  "duration": 8358442653,
  "status": "passed"
});
formatter.after({
  "duration": 5871269866,
  "status": "passed"
});
});