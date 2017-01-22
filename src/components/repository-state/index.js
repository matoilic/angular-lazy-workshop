import './repository-state.scss';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-translate';
import fileBrowserComponent from './../git-hub-file-browser/index';
import translationsModule from './i18n/translations';
import RepositoryStateController from './repository-state-controller';
import repositoryRouteConfig from './repository-route';

const dependencies = [
    'ui.router',
    'pascalprecht.translate',
    translationsModule.name,
    fileBrowserComponent.name
];

export default angular
    .module('repository-state-component', dependencies)
    .controller('RepositoryStateController', RepositoryStateController)
    .config(repositoryRouteConfig);
