class GitHubSearchController {
    constructor(searchService) {
        this._searchService = searchService;
        this._searchTerm = '';
        this.repositories = [];

        this._updateResults();
    }

    get searchTerm() {
        return this._searchTerm;
    }

    set searchTerm(val) {
        this._searchTerm = val;
        this._updateResults();
    }

    _updateResults() {
        this.updating = true;

        this._searchService
            .find(this._searchTerm)
            .then((repos) => {
                this.repositories = repos;
                this.updating = false;
            });
    }
}

export default [
    'gitHubSearchService',
    GitHubSearchController
];
