import angular from 'angular';
import 'angular-mocks';
import component from './index';

describe('Git Hub Search service', () => {
    let apiService;
    let searchService;

    beforeEach(() => {
        angular.mock.module(component.name);

        angular.mock.inject((gitHubApi, gitHubSearchService, $q) => {
            apiService = gitHubApi;
            searchService = gitHubSearchService;

            spyOn(gitHubApi, 'listRepositories').and.returnValue({});
            spyOn(gitHubApi, 'searchRepositories').and.returnValue({});
        });
    });

    it('should list all public repositories if the search term is empty', () => {
        searchService.find('');

        expect(apiService.listRepositories).toHaveBeenCalled();
        expect(apiService.searchRepositories).not.toHaveBeenCalled();
    });

    it('should search for repositories if the search term is not empty', () => {
        const term = 'angular';

        searchService.find(term);

        expect(apiService.listRepositories).not.toHaveBeenCalled();
        expect(apiService.searchRepositories).toHaveBeenCalledWith(term);
    });

    it('should cache search operations', () => {
        const term = 'angular';

        searchService.find(term);
        searchService.find(term);

        expect(apiService.searchRepositories.calls.count()).toBe(1);
    });
});
