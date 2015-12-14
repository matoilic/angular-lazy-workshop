function en($translateProvider) {
    $translateProvider.translations('en', {
        'gitHubSearch.searchTermPlaceholder': 'Search…',
        'gitHubSearch.updating': 'Updating repository list…',
        'gitHubSearch.repoName': 'Repository',
        'gitHubSearch.repoOwner': 'Owner',
        'gitHubSearch.repoDescription': 'Description (click for details)'
    });
}

export default [
    '$translateProvider',
    en
];
