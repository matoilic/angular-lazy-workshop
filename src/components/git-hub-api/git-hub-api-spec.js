import angular from 'angular';
import 'angular-mocks';
import component from './index';
import constants from './constants.json!';
import repositoriesList from './test-data/repositories.json!';
import searchRepositoriesList from './test-data/search-repositories.json!';
import readme from './test-data/readme.json!';
import renderedReadme from './test-data/rendered-readme.html!text';

describe('Git Hub API', () => {
    const apiUrl = constants.gitHubApiUrl;
    const gitHubUsername = 'test';
    const gitHubToken = 'test1234';
    let $httpBackend;
    let api;

    beforeEach(() => {
        angular.mock.module(component.name, (gitHubApiProvider) => {
            gitHubApiProvider.username = gitHubUsername;
            gitHubApiProvider.token = gitHubToken;
        });

        angular.mock.inject(($injector) => {
            $httpBackend = $injector.get('$httpBackend');
            api = $injector.get('gitHubApi');
        });
    });

    it('should set the Authorization header', () => {
        const headers = {
            Accept: 'application/json, text/plain, */*',
            Authorization: `Basic ${btoa(`${gitHubUsername}:${gitHubToken}`)}`
        };

        $httpBackend
            .expectGET(`${apiUrl}/repositories?`, headers)
            .respond(repositoriesList);

        api
            .listRepositories();

        $httpBackend.flush();
    });

    it('should fetch the public repositories', () => {
        $httpBackend
            .expectGET(`${apiUrl}/repositories?`)
            .respond(repositoriesList);

        api
            .listRepositories()
            .then(repos => {
                expect(repos.length).toBe(6);
                expect(repos[0].full_name).toBe('mojombo/grit');
                expect(repos[5].description).toBe('A JavaScript BDD Testing Library');
            });

        $httpBackend.flush();
    });

    it('should search for repositories', () => {
        const term = 'angular';

        $httpBackend
            .expectGET(`${apiUrl}/search/repositories?q=${term}`)
            .respond(searchRepositoriesList);

        api
            .searchRepositories(term)
            .then(repos => {
                expect(repos.length).toBe(6);
                expect(repos[0].full_name).toBe('angular/angular');
                expect(repos[5].url).toBe('https://api.github.com/repos/SeedPaths/Angular');
            });

        $httpBackend.flush();
    });

    it('should load a readme file', () => {
        const repo = 'jspm-cli';
        const owner = 'jspm';

        $httpBackend
            .expectGET(`${apiUrl}/repos/${owner}/${repo}/readme?`)
            .respond(readme);

        api
            .loadReadme(owner, repo)
            .then(reponse => {
                expect(reponse).toBe(atob(readme.content));
            });

        $httpBackend.flush();
    });

    it('should render markdown', () => {
        const content = '# This is a title';

        $httpBackend
            .expectPOST(`${apiUrl}/markdown?`, { text: content, mode: 'markdown' })
            .respond(renderedReadme);

        api
            .renderMarkdown(content)
            .then(reponse => {
                expect(reponse).toBe(renderedReadme);
            });

        $httpBackend.flush();
    });
});
