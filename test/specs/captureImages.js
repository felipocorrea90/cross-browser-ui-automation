/**
 * Created by felipe on 11/29/17.
 */

describe('Capture component images', function() {

    it('Get images on Large viewport', function () {

        // Add the url that the WebDriver is going to open
        browser.url('https://www.bloomberg.com/');

        // Set viewport size
        browser.setViewportSize({
            width: 1025,
            height: 800
        });

        // Scroll WebDriver to the element you want to capture
        browser.scroll('.bb-nav__container')

        // ------
        // Take screenshot using wdio-screenshot
        // This takes 2 arguments
        // 1. Location where image is going to be saved
        // 2. CSS locator of element to capture
        // Use browser.desiredCapabilities.browser if you want to capture the browser name
        // ------
        browser.saveElementScreenshot('./test/images/sample/' +  browser.desiredCapabilities.browser + '-bloomberg-demo-current-L.png', '.bb-nav__container');
    });

    it('Get images on Medium viewport', function () {
        // Set viewport size
        browser.setViewportSize({
            width: 769,
            height: 800
        });

        // Scroll WebDriver to the element you want to capture
        browser.scroll('.bb-nav__container')

        // ------
        // Take screenshot using wdio-screenshot
        // This takes 2 arguments
        // 1. Location where image is going to be saved
        // 2. CSS locator of element to capture
        // ------
        browser.saveElementScreenshot('./test/images/sample/' +  browser.desiredCapabilities.browser + '-bloomberg-demo-current-M.png', '.bb-nav__container');
    });

    it('Get images on Small viewport', function () {
        // Set viewport size
        browser.setViewportSize({
            width: 768,
            height: 800
        });

        // Scroll WebDriver to the element you want to capture
        browser.scroll('.bb-nav__container')

        // ------
        // Take screenshot using wdio-screenshot
        // This takes 2 arguments
        // 1. Location where image is going to be saved
        // 2. CSS locator of element to capture
        // ------
        browser.saveElementScreenshot('./test/images/sample/' +  browser.desiredCapabilities.browser + '-bloomberg-demo-current-S.png', '.bb-nav__container');
    });
});
