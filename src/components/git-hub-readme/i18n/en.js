function en($translateProvider) {
    $translateProvider.translations('en', {
        'gitHubReadme.loading': 'Loading README content&hellip;',
        'gitHubReadme.noReadme': 'This repository has no README file.',
        'gitHubReadme.error': 'An error occured while loading the README file.'
    });
}

export default [
    '$translateProvider',
    en
];
