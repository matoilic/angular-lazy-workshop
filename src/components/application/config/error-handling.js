function errorHandlingConfig($rootScope) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        throw new Error(`error occurred while transitioning to ${toState.name}: ${error}`);
    });
}

export default [
    '$rootScope',
    errorHandlingConfig
];
