function defaultLanguageConfig($translateProvider) {
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}

export default [
    '$translateProvider',
    defaultLanguageConfig
];
