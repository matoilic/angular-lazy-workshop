class GitHubSearchService {
    constructor(gitHubApi) {
        this._api = gitHubApi;
        this._terms = {};
    }

    find(term) {
        const normalizedTerm = term.trim().toLowerCase();

        if (!this._terms[normalizedTerm]) {
            this._terms[normalizedTerm] = normalizedTerm.length ? this._api.searchRepositories(normalizedTerm) : this._api.listRepositories();
        }

        return this._terms[normalizedTerm];
    }
}

export default [
    'gitHubApi',
    GitHubSearchService
];
