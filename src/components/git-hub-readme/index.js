import './git-hub-readme.scss';
import angular from 'angular';
import 'angular-translate';
import 'angular-sanitize';
import 'angular-animate';
import uiBootstrap from 'angular-ui-bootstrap';
import gitHubApiComponent from './../git-hub-api/index';
import translationsModule from './i18n/translations';
import GitHubReadmeController from './git-hub-readme-controller';
import GitHubReadmeService from './git-hub-readme-service';
import gitHubReadmeDirective from './git-hub-readme-directive';

const dependencies = [
    'pascalprecht.translate',
    'ngSanitize',
    'ngAnimate',
    uiBootstrap,
    translationsModule.name,
    gitHubApiComponent.name
];

export default angular
    .module('git-hub-readme-component', dependencies)
    .controller('GitHubReadmeController', GitHubReadmeController)
    .service('gitHubReadmeService', GitHubReadmeService)
    .directive('gitHubReadme', gitHubReadmeDirective);
