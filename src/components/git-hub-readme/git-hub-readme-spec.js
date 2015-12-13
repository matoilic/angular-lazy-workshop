import angular from 'angular';
import 'angular-mocks';
import component from './index';

class GitHubApiMock {
    constructor($q) {
        this._q = $q;
        this.markdown = '# Readme';
    }

    loadReadme(owner, repo) {
        this.requestedOwner = owner;
        this.requestedRepo = repo;

        return this._q.when(this.markdown);
    }

    renderMarkdown(markdown) {
        this.requestedMarkdown = markdown;

        return this._q.when('<h1>Readme</h1>');
    }
}

class ModalMock {
    open(options) {
        this.modalOptions = options;
    }
}

describe('Git Hub Readme Service', () => {
    const owner = 'jspm';
    const repo = 'jspm-cli';
    let readmeService;
    let apiMock;
    let modalMock;
    let $rootScope;

    beforeEach(() => {
        angular.mock.module(component.name, ($provide) => {
            $provide.service('gitHubApi', ['$q', GitHubApiMock]);
            $provide.service('$uibModal', [ModalMock]);
        });

        angular.mock.inject(($injector) => {
            readmeService = $injector.get('gitHubReadmeService');
            apiMock = $injector.get('gitHubApi');
            modalMock = $injector.get('$uibModal');
            $rootScope = $injector.get('$rootScope');
        });
    });

    it('should load and render a readme', () => {
        readmeService
            .render(owner, repo)
            .then(() => {
                expect(apiMock.requestedOwner).toBe(owner);
                expect(apiMock.requestedRepo).toBe(repo);
                expect(apiMock.requestedMarkdown).toBe(apiMock.markdown);
            });

        $rootScope.$digest();
    });

    it('should open the readme in a modal dialog', () => {
        readmeService.show(owner, repo);

        expect(modalMock.modalOptions.scope.owner).toBe(owner);
        expect(modalMock.modalOptions.scope.repository).toBe(repo);
    });
});
