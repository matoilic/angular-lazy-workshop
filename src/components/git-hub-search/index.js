import './git-hub-search.css!'
import angular from 'angular';
import 'angular-translate';
import translationsModule from './i18n/translations';
import GitHubSearchController from './git-hub-search-controller';
import GitHubSearchService from './git-hub-search-service';
import gitHubSearchDirective from './git-hub-search-directive';

const dependencies = [
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('git-hub-search-component', dependencies)
    .controller('GitHubSearchController', GitHubSearchController)
    .service('gitHubSearchService', GitHubSearchService)
    .directive('gitHubSearch', gitHubSearchDirective);
