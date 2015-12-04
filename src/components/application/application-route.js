import template from './application.html!text';

function applicationRouteConfig($stateProvider) {
    $stateProvider
        .state('app', {
            url: '/app/',
            abstract: true,
            views: {
                page: {
                    template: template,
                    controller: 'ApplicationController as application'
                }
            }
        });
}

export default [
    '$stateProvider',
    applicationRouteConfig
];
