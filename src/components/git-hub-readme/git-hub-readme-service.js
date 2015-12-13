class GitHubReadmeService {
    constructor($uibModal, $rootScope, gitHubApi) {
        this._modal = $uibModal;
        this._rootScope = $rootScope;
        this._api = gitHubApi;
    }

    render(owner, repository) {
        return this._api
            .loadReadme(owner, repository)
            .then((content) => this._api.renderMarkdown(content));
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
    GitHubReadmeService
];
