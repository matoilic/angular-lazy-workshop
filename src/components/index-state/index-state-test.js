describe('Index State', function() {
    const EC = protractor.ExpectedConditions;

    beforeEach(() => {
        browser.get(`${browser.baseUrl}/index`);
    });

    it('should should render properly', () => {
        browser.wait(EC.presenceOf($('input[type="search"]')), 5000);

        const stateElement = element(by.css('.index-state'));

        expect(stateElement.isPresent()).toBeTruthy();
    });
});
