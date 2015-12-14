class GitHubApi {
    constructor(username, token, apiUrl, $http) {
        this._apiUrl = apiUrl;
        this._http = $http;

        if (username && token) {
            this._httpOptions = {
                headers: {
                    Authorization: `Basic ${btoa(`${username}:${token}`)}`
                }
            };
        } else {
            this._httpOptions = {};
        }
    }

    _assembleApiUrl(service, params = {}) {
        const urlParams = Object.keys(params)
            .map((k) => `${k}=${encodeURIComponent(params[k])}`)
            .join('&');

        return `${this._apiUrl}/${service}?${urlParams}`;
    }

    listRepositories() {
        return this._http
            .get(this._assembleApiUrl('repositories'), this._httpOptions)
            .then((response) => response.data);
    }

    loadReadme(owner, repository) {
        return this._http
            .get(this._assembleApiUrl(`repos/${owner}/${repository}/readme`), this._httpOptions)
            .then((response) => atob(response.data.content));
    }

    renderMarkdown(content) {
        const httpOptions = Object.assign({responseType: 'text'}, this._httpOptions);

        return this._http
            .post(this._assembleApiUrl('markdown'), {text: content, mode: 'markdown'}, httpOptions)
            .then((response) => response.data);
    }

    searchRepositories(term) {
        return this._http
            .get(this._assembleApiUrl('search/repositories', {q: term}), this._httpOptions)
            .then((response) => response.data.items);
    }
}

function gitHubApiProvider() {
    this.username = null;
    this.token = null;

    this.$get = [
        '$http',
        'gitHubApiUrl',
        ($http, gitHubApiUrl) => new GitHubApi(this.username, this.token, gitHubApiUrl, $http)
    ];
}

export default [
    gitHubApiProvider
];
