import angular from 'angular';
import 'angular-mocks';
import applicationComponent from './index';

describe('Application Component', () => {
    const apiUsername = 'john';
    const apiToken = 'smith1234';
    let apiProvider;

    beforeEach(() => {
        localStorage.setItem('git-hub-username', apiUsername);
        localStorage.setItem('git-hub-token', apiToken);

        angular.mock.module(applicationComponent.name, (gitHubApiProvider) => {
            apiProvider = gitHubApiProvider;
        });

        angular.mock.inject((gitHubApi) => { });
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('should configure the GitHub API service', () => {
        expect(apiProvider.username).toBe(apiUsername);
        expect(apiProvider.token).toBe(apiToken);
    });
});
