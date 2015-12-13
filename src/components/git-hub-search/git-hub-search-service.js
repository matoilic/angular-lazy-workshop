class GitHubSearchService {
    constructor(gitHubApi) {
        this._api = gitHubApi;
        this._terms = {};
    }

    find(term) {
        term = term.trim().toLowerCase();

        if(!this._terms[term]) {
            this._terms[term] = term.length ? this._api.searchRepositories(term) : this._api.listRepositories();
        }

        return this._terms[term];
    }
}

export default [
    'gitHubApi',
    GitHubSearchService
];
