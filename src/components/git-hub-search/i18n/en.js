function en($translateProvider) {
    $translateProvider.translations('en', {
        'gitHubSearch.searchTermPlaceholder': 'Search…',
        'gitHubSearch.updating': 'Updating repository list…'
    });
}

export default [
    '$translateProvider',
    en
];
