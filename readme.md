**Visual Cross-Browser Validation**
-----------------------------------
Validate visual compliance of any given web element across multiple browsers and viewports by generating images highlighting the differences.

This project uses Resemble JS (https://github.com/Huddle/Resemble.js) to generate the comparable images. Webdriver IO (http://webdriver.io/) to interact with the browser and wdio-screenshot plugin to capture web elements snapshots.

The WebdriverIO runner configuration file (wdio.conf.js) is already set up out of the box to run specs on BrowserStack. Make sure to add the credentials of you BrowserStack account on the following section

    exports.config = {

    // ==================
    // BrowserStack integration credentials
    // ==================
    user: '',
    key: '',

By default tests will run on the following browsers:

 - Microsoft Edge (v15)
 - IE 11
 - Safari 11 (High Sierra)
 - Firefox (v56)
 - Chrome (v61)

You can edit any of these settings by modifying the capabilities object on the WebdriverIO runner configuration file.

## Run your first test ##
1. Run `npm i` to install all the necessary dependencies
2. Run the wdio runner to start the test execution on BrowserStack `./node_modules/.bin/wdio wdio.conf.js --suite sampleSuite`
3. Make sure images were saved on the defined folder (/test/images/sample by default)
4. Compare images by running the `analyzeImages` spec and make sure the images highlighting the differences were generated after the spec execution `npm test ./test/specs/analyzeImages.js`

> **Notes:**
> - You can verify any issues by looking at the video and log generated on the BrowserStack dashboard.
> - You can add a step to assert the mismatch percentage of any given set of images. Look at the Resemble JS documentation for more information.
> - Sample test will capture images of the Bloomberg site header on the mentioned browsers and across three different viewports. Future changes on the Bloomberg site could make this sample test fail due to invalid css locators.

