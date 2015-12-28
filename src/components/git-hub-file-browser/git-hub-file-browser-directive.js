import template from './git-hub-file-browser.html!text';

function gitHubFileBrowserDirective() {
    return {
        restrict: 'E',
        replace: true,
        template: template,
        controller: 'GitHubFileBrowserController as gitHubFileBrowser',
        scope: {
            owner: '=',
            repo: '=',
            path: '=?'
        },
        bindToController: true
    };
}

export default[
    gitHubFileBrowserDirective
];
