class GitHubReadmeController {
    constructor(readmeService, $sce) {
        this.content = $sce.trustAsHtml('');

        this._contentPromise = readmeService
            .render(this.owner, this.repository)
            .then(content => this.content = $sce.trustAsHtml(content));
    }
}

export default [
    'gitHubReadmeService',
    '$sce',
    GitHubReadmeController
];
