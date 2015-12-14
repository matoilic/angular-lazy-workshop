describe('Application Component', () => {
    const driver = browser.driver;

    beforeEach(() => {
        driver.get(browser.baseUrl);
        driver.wait(driver.isElementPresent(by.css('ui-view[name="application"]')), 20000);
    });

    afterEach(() => {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

    it('should pass the dummy test to verify the protractor setup', () => {
        expect(true).toBe(true);
    });
});
