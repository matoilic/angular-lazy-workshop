describe('Git Hub Search', () => {
    const EC = protractor.ExpectedConditions;

    beforeEach(() => {
        browser.get(`${browser.baseUrl}/index`);
    });

    it('should contain a search field', () => {
        browser.wait(EC.presenceOf($('input[type="search"]')), 5000);

        const searchField = element(by.css('input[type="search"]'));

        expect(searchField.isPresent()).toBeTruthy();
    });
});
