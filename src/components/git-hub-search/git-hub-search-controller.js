class GitHubSearchController {
    constructor(searchService, componentLoader) {
        this._searchService = searchService;
        this._componentLoader = componentLoader;
        this._searchTerm = '';
        this.repositories = [];

        this._updateResults().then(() => componentLoader.loadComponent('git-hub-readme'));
    }

    get searchTerm() {
        return this._searchTerm;
    }

    set searchTerm(val) {
        this._searchTerm = val;
        this._updateResults();
    }

    showReadme(repo) {
        this._componentLoader
            .resolve('git-hub-readme', 'gitHubReadmeService')
            .then((readMeService) => readMeService.show(repo.owner.login, repo.name));
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
    GitHubSearchController
];
