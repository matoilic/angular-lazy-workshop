describe('Git Hub Search', () => {
    const EC = protractor.ExpectedConditions;

    beforeEach(() => {
        browser.get(`${browser.baseUrl}/index`);
    });

    it('should contain a search field', () => {
        const searchField = $('input[type="search"]');

        browser.wait(EC.presenceOf(searchField));

        expect(searchField.isPresent()).toBeTruthy();
    });

    it('should show a list of repositories', () => {
        const listElement = $('.git-hub-search-result-list tr:nth-child(3)');
        browser.wait(EC.presenceOf(listElement));

        const repositories = $$('.git-hub-search-result-list tr');
        expect(repositories.count()).toBeGreaterThan(10);
    });

    it('should search for repositories', () => {
        const searchField = $('input[type="search"]');

        browser.wait(EC.presenceOf(searchField));

        searchField.sendKeys('angular');

        const loadIndicator = $('.git-hub-search-load-indicator');
        browser.wait(EC.invisibilityOf(loadIndicator));

        const firstCell = $('.git-hub-search-result-list tr:first-child td:first-child');
        expect(firstCell.getText()).toBe('angular');
    });
});
