function defaultLanguageConfig($translateProvider) {
    $translateProvider.preferredLanguage('en');
}

export default [
    '$translateProvider',
    defaultLanguageConfig
];
