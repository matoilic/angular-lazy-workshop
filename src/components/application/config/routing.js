import futureStates from './states.json!';

function routingConfig($locationProvider, $urlRouterProvider, $httpProvider, $futureStateProvider) {
    futureStates.forEach(function(r) {
        $futureStateProvider.futureState(r);
    });

    $httpProvider.useApplyAsync(true);
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $urlRouterProvider.otherwise('/app/index');
    $urlRouterProvider.when('/', '/app/index');
}

export default [
    '$locationProvider',
    '$urlRouterProvider',
    '$httpProvider',
    '$futureStateProvider',
    routingConfig
];
