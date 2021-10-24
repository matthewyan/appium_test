# appium_test

Reference from：[Mobile e2e tests using WebdriverIO and Appium](https://dev.to/fmo91/mobile-e2e-tests-using-webdriverio-and-appium-4071)



## run this demo

- `npm i`
- Edit `wdio.conf.js` in root directory. 
- Change `capabilities` property to your device information. (include `uuid` / `platformVersion` / `deviceName`)
- `npx wdio wdio.conf.js`



## create a new demo

- `npm init -y` in a empty directory

- `npm i --save-dev @wdio/cli appium@1.21.0`

- `npx wdio config`

Configuration options:

> **Where is your automation backend located?** On my local machine
>
> **Which framework do you want to use?** jasmine
>
> **Do you want to use a compiler?** No!
>
> **Where are your test specs located?** ./test/specs/**/*.js
>
> **Do you want WebdriverIO to autogenerate some test files?** Yes
>
> **Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)?** No
>
> **Which reporter do you want to use?** spec
>
> **Do you want to add a service to your test setup?** appium
>
> **What is the base url?** http://localhost

- Edit `wdio.conf.js` in root directory.

add  `path: '/wd/hub'`

change `capabilities` likes this:

> capabilities: [{
>
> ​        "platformVersion": "14.5",
>
> ​        "autoGrantPermissions": "true",
>
> ​        "udid": "4C6DDF64-D4A0-4891-B706-B5CCD0FE557E",
>
> ​        "automationName": "XCUITest",
>
> ​        "deviceName": "iPhone 12 Pro",
>
> ​        "bundleId": "fmo.Testable",
>
> ​        "platformName": "iOS",
>
> ​        "app": "/Users/yanmeng/Desktop/Temp/appium_test/ipa/Testable.app"
>
> ​      }],

- add your test code and ipa/apk
- `npx wdio wdio.conf.js`

