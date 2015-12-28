class GitHubFileBrowserService {
    constructor(gitHubApi) {
        this._api = gitHubApi;
    }

    fetchContents(owner, repo, path) {
        return this._api.listRepositoryContents(owner, repo, path);
    }
}

export default [
    'gitHubApi',
    GitHubFileBrowserService
];
