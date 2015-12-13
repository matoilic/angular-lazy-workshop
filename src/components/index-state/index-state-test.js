describe('Index State', function() {
    beforeEach(() => {
        browser.get('/app/index');
    });

    it('should should render properly', () => {
        const stateElement = element(by.css('.index-state'));

        expect(stateElement.isPresent()).toBeTruthy();
    });
});
