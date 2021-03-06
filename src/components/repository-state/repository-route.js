import template from './repository-state.html!text';

function repositoryRouteConfig($stateProvider) {
    $stateProvider
        .state('app.repository', {
            url: 'repository/:owner/:repo',
            views: {
                application: {
                    template: template,
                    controller: 'RepositoryStateController as repositoryState'
                }
            }
        });
}

export default [
    '$stateProvider',
    repositoryRouteConfig
];
