class GitHubFileBrowserController {
    constructor(gitHubFileBrowserService) {
        this._browserService = gitHubFileBrowserService;
        this._breadcrumbs = [];
        this.contents = [];

        if (!this.path) {
            this.path = '';
        }

        this._browserService
            .fetchContents(this.owner, this.repo, this.path)
            .then((response) => {
                this._updateBreadcrumbs(this.path);
                this.contents = response;
            });
    }

    get breadcrumbs() {
        return this._breadcrumbs;
    }

    classFor(resource) {
        return `git-hub-file-browser-${resource.type}`;
    }

    _normalizePath(path) {
        if(path[0] === '/') {
            return path.slice(1);
        }

        return path;
    }

    open(resource) {
        this._browserService
            .fetchContents(this.owner, this.repo, resource.path)
            .then((response) => {
                this._updateBreadcrumbs(resource.path);
                this.contents = response;
            });
    }

    _updateBreadcrumbs(path) {
        this._breadcrumbs = [];

        path = this._normalizePath(path);

        if (path.length) {
            const parts = path.split('/');
            while (parts.length) {
                let current = parts.pop();

                this._breadcrumbs.unshift({
                    name: current,
                    path: `${parts.join('/')}/${current}`
                });
            }
        }

        this._breadcrumbs.unshift({
            name: this.repo,
            path: ''
        });
    }
}

export default [
    'gitHubFileBrowserService',
    GitHubFileBrowserController
];
