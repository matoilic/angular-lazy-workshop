import template from './git-hub-readme.html';

function gitHubReadmeDirective() {
    return {
        restrict: 'E',
        replace: true,
        template: template,
        controller: 'GitHubReadmeController as gitHubReadme',
        scope: {
            owner: '=',
            repository: '='
        },
        bindToController: true
    };
}

export default[
    gitHubReadmeDirective
];
