import template from './git-hub-search.html!text';

function gitHubSearchDirective() {
    return {
        restrict: 'E',
        replace: true,
        template: template,
        controller: 'GitHubSearchController as gitHubSearch',
        scope: {

        },
        bindToController: true
    };
}

export default[
    gitHubSearchDirective
];
