class GitHubReadmeService {
    constructor($uibModal, $rootScope, gitHubApi, $filter) {
        this._modal = $uibModal;
        this._rootScope = $rootScope;
        this._api = gitHubApi;
        this._filter = $filter;
        this._cache = {};
    }

    render(owner, repository) {
        const key = `${owner}:${repository}`;

        if (!this._cache[key]) {
            this._cache[key] = this._api
                .loadReadme(owner, repository)
                .then((content) => this._api.renderMarkdown(content))
                .catch((reason) => {
                    if (reason.status === 404) {
                        return this._filter('translate')('gitHubReadme.noReadme');
                    }

                    this._cache[key] = null;

                    return this._filter('translate')('gitHubReadme.error');
                });
        }

        return this._cache[key];
    }

    show(owner, repository) {
        const scope = this._rootScope.$new(true);
        scope.owner = owner;
        scope.repository = repository;

        return this._modal.open({
            template: '<git-hub-readme owner="::owner" repository="::repository"></git-hub-readme>',
            scope
        });
    }
}

export default [
    '$uibModal',
    '$rootScope',
    'gitHubApi',
    '$filter',
    GitHubReadmeService
];
