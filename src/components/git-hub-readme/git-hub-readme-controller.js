class GitHubReadmeController {
    constructor(readmeService, $sce) {
        this._readmeService = readmeService;
        this._$sce = $sce;
        this.content = $sce.trustAsHtml('');
    }

    $onInit() {
        this._readmeService
            .render(this.owner, this.repository)
            .then(content => this.content = this._$sce.trustAsHtml(content));
    }
}

export default [
    'gitHubReadmeService',
    '$sce',
    GitHubReadmeController
];
