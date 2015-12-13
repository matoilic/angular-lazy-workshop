function en($translateProvider) {
    $translateProvider.translations('en', {
        'gitHubReadme.loading': 'Loading README content&hellip;'
    });
}

export default [
    '$translateProvider',
    en
];
