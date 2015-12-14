describe('Index State', function() {
    const EC = protractor.ExpectedConditions;

    beforeEach(() => {
        browser.get(`${browser.baseUrl}/index`);
    });

    it('should should render properly', () => {
        const element = $('.index-state');

        browser.wait(EC.presenceOf(element));

        expect(element.isPresent()).toBeTruthy();
    });
});
