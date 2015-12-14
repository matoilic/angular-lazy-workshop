import 'babel/external-helpers';
import angular from 'angular';
import 'angular-ui-router';
import 'ui-router-extras';
import 'angular-animate';
import ocLazyLoad from 'oclazyload';
import ngLazy from 'angular-lazy';
import 'angular-translate';
import gitHubApiComponent from 'components/git-hub-api/index';
import translationsModule from './i18n/translations';
import defaultLocaleConfig from './config/default-locale';
import routingConfig from './config/routing';
import errorHandlingConfig from './config/error-handling';
import constants from './config/constants.json!';
import gitHubApiConfig from './config/git-hub-api';
import ApplicationController from './application-controller';
import applicationRoute from './application-route';

const dependencies = [
    'ui.router',
    ocLazyLoad,
    'ct.ui.router.extras',
    'ct.ui.router.extras.future',
    ngLazy.name,
    'pascalprecht.translate',
    'ngAnimate',
    translationsModule.name,
    gitHubApiComponent.name
];

const app = angular
    .module('application-component', dependencies)
    .controller('ApplicationController', ApplicationController)
    .config(routingConfig)
    .config(applicationRoute)
    .config(defaultLocaleConfig)
    .config(gitHubApiConfig)
    .run(errorHandlingConfig);

Object.keys(constants).forEach((constantName) => app.constant(constantName, constants[constantName]));

export default app;
