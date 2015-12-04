class GitHubSearchService {
    constructor($http) {
        this._http = $http;
    }

    find(term) {
        return term.length ? this._searchRepositories(term) : this._fetchAllRepositories();
    }

    _searchRepositories(term) {
        return this._http
            .get('https://api.github.com/search/repositories?q=' + encodeURIComponent(term))
            .then((response) => response.data.items);
    }

    _fetchAllRepositories() {
        return this._http
            .get('https://api.github.com/repositories')
            .then((response) => response.data);
    }
}

export default [
    '$http',
    GitHubSearchService
];
