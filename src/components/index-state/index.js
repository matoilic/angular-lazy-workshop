import './index-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-translate';
import ghSearchComponent from 'components/git-hub-search/index';
import translationsModule from './i18n/translations';
import IndexStateController from './index-state-controller';
import indexRouteConfig from './index-route';

const dependencies = [
    'ui.router',
    'pascalprecht.translate',
    translationsModule.name,
    ghSearchComponent.name
];

export default angular
    .module('index-state-component', dependencies)
    .controller('IndexStateController', IndexStateController)
    .config(indexRouteConfig);
