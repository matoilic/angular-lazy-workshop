function gitHubApiConfig(gitHubApiProvider) {
    gitHubApiProvider.username = localStorage.getItem('git-hub-username');
    gitHubApiProvider.token = localStorage.getItem('git-hub-token');
}

export default [
    'gitHubApiProvider',
    gitHubApiConfig
];
