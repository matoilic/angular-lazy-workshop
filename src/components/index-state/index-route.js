import template from './index-state.html!text';

function indexRouteConfig($stateProvider) {
    $stateProvider
        .state('app.index', {
            url: 'index',
            views: {
                application: {
                    template: template,
                    controller: 'IndexStateController as indexState'
                }
            }
        });
}

export default [
    '$stateProvider',
    indexRouteConfig
];
