class RepositoryStateController {
    constructor(stateParams) {
        this._stateParams = stateParams;
    }

    get repoName() {
        return this._stateParams.repo;
    }

    get repoOwner() {
        return this._stateParams.owner;
    }
}

export default [
    '$stateParams',
    RepositoryStateController
];
