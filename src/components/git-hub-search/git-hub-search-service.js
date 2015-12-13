class GitHubSearchService {
    constructor(gitHubApi) {
        this._api = gitHubApi;
    }

    find(term) {
        return term.length ? this._searchRepositories(term) : this._fetchAllRepositories();
    }

    _searchRepositories(term) {
        term = term.trim().toLowerCase();

        if(!this._terms[term]) {
            this._terms[term] = this._api.searchRepositories(term);
        }

        return this._terms[term];
    }

    _fetchAllRepositories() {
        if(!this._all) {
            this._all = this._api.listRepositories();
        }

        return this._all;
    }
}

export default [
    'gitHubApi',
    GitHubSearchService
];
