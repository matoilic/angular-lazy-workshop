describe('Git Hub Readme', () => {
    const EC = protractor.ExpectedConditions;

    it('should show the rendered readme file when clicking on the description', () => {
        const loadIndicator = $('.git-hub-search-load-indicator');
        browser.wait(EC.invisibilityOf(loadIndicator));

        const firstDescription = $('.git-hub-search-result-list tr:first-child td:last-child');
        firstDescription.click();

        const readme = $('.git-hub-readme');
        browser.wait(EC.visibilityOf(readme));

        expect(readme.getText()).not.toContain('##');
        expect(readme.getInnerHtml()).toContain('<h2>');
    });
});
