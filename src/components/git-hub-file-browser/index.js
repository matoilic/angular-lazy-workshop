import './git-hub-file-browser.scss';
import angular from 'angular';
import 'angular-translate';
import gitHubApiComponent from './../git-hub-api/index';
import translationsModule from './i18n/translations';
import GitHubFileBrowserController from './git-hub-file-browser-controller';
import GitHubFileBrowserService from './git-hub-file-browser-service';
import gitHubFileBrowserDirective from './git-hub-file-browser-directive';

const dependencies = [
    'pascalprecht.translate',
    translationsModule.name,
    gitHubApiComponent.name
];

export default angular
    .module('git-hub-file-browser-component', dependencies)
    .controller('GitHubFileBrowserController', GitHubFileBrowserController)
    .service('gitHubFileBrowserService', GitHubFileBrowserService)
    .directive('gitHubFileBrowser', gitHubFileBrowserDirective);
