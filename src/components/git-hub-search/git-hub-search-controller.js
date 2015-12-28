class GitHubSearchController {
    constructor(searchService, componentLoader, $timeout) {
        this._searchService = searchService;
        this._componentLoader = componentLoader;
        this._timeout = $timeout;
        this._searchTerm = '';
        this.repositories = [];
        this._preloadDebounce = null;

        this._updateResults();
    }

    _cancelPreload() {
        if (this._preloadDebounce && this._preloadDebounce.cancel) {
            this._preloadDebounce.cancel();
            this._preloadDebounce = null;
        }
    }

    onMouseEnterDescription(repo) {
        this._cancelPreload();

        this._preloadDebounce = this._timeout(() => {
            this._componentLoader
                .resolve('git-hub-readme', 'gitHubReadmeService')
                .then((readMeService) => readMeService.render(repo.owner.login, repo.name));
        }, 500);
    }

    onMouseLeaveDescription() {
        this._cancelPreload();
    }

    get searchTerm() {
        return this._searchTerm;
    }

    set searchTerm(val) {
        this._searchTerm = val;
        this._updateResults();
    }

    showReadme(event, repo) {
        event.preventDefault();

        this._componentLoader
            .resolve('git-hub-readme', 'gitHubReadmeService')
            .then((readMeService) => readMeService.show(repo.owner.login, repo.name));

        return false;
    }

    _updateResults() {
        this.updating = true;

        return this._searchService
            .find(this._searchTerm)
            .then((repos) => {
                this.repositories = repos;
                this.updating = false;
            });
    }
}

export default [
    'gitHubSearchService',
    'componentLoader',
    '$timeout',
    GitHubSearchController
];
